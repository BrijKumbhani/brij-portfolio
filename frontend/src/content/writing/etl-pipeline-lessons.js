const post = {
    slug: "etl-pipeline-lessons",
    title: "What I learned building an ETL pipeline for stock data",
    date: "2026-06-14",
    excerpt: "Idempotency, loud failures, and why the boring 80% of data engineering is the part that actually matters.",
    tags: ["Data Engineering", "Python", "PostgreSQL"],
    content: `
When I started building **MarketPulse** — a small pipeline that ingests daily market data into PostgreSQL — I thought the hard part would be the analysis. It wasn't. The hard part was everything *before* the analysis: getting data from an API into a database in a way that doesn't silently rot.

Here are the four lessons that stuck.

## 1. Idempotency is not optional

My first version used plain \`INSERT\` statements. Then the API timed out mid-run, I re-ran the script, and suddenly every row existed twice. The fix — an upsert keyed on \`(symbol, trade_date)\` — sounds obvious in hindsight:

\`\`\`sql
INSERT INTO daily_prices (symbol, trade_date, open, high, low, close, volume)
VALUES ($1, $2, $3, $4, $5, $6, $7)
ON CONFLICT (symbol, trade_date) DO UPDATE
SET close = EXCLUDED.close, volume = EXCLUDED.volume;
\`\`\`

Now a failed run costs nothing. Re-run it and the database converges to the correct state. This single property makes every other failure mode survivable.

## 2. Fail loudly, not silently

APIs return malformed data more often than you'd expect: missing fields, zero-volume days, timestamps in the wrong timezone. My instinct was to coerce everything and keep going. Wrong move — bad rows poison every downstream average.

Instead, the transform layer now **asserts** before it loads:

\`\`\`python
def validate(df: pd.DataFrame) -> pd.DataFrame:
    assert not df.duplicated(subset=["symbol", "trade_date"]).any()
    assert (df["high"] >= df["low"]).all(), "high < low detected"
    assert df["close"].notna().all(), "null closes in batch"
    return df
\`\`\`

If the source misbehaves, the run fails and the logs tell me exactly why. A loud failure at 6am is a gift; a silent one is a week of wrong charts.

## 3. Separate extract, transform, load — for real

It's tempting to fetch, clean and insert in one loop. Keeping the three stages as separate functions with plain-data boundaries paid off immediately: I could unit-test the transform on saved JSON fixtures without touching the network or the database, and when I swapped the API's response format, only the extract layer changed.

## 4. Log row counts, not vibes

Every run ends with a one-line log: symbols fetched, rows validated, rows upserted, duration. That tiny audit trail has caught two real incidents — once when the API quietly started returning half the symbols, the row count halved and the anomaly was obvious in seconds.

The takeaway: the glamorous part of data work is the model or the dashboard, but the part that determines whether anyone trusts your numbers is the boring plumbing. Build the plumbing like it matters — because it's the only thing that does.
`,
};

export default post;
