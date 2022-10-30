const createMarkup = (choice, pairs) => {
    const header = `<h2>${choice}</h2>`;
    const body = pairs.map(pair => {
        const date = new Date(pair.CloseDate);
        const fullDate = date.toDateString();

        return `
        <p>Date: ${fullDate}<p>
        <p>Open price: ${pair.yesterday}</p>
        <p>Closing price: ${pair.Close}</p>
        <p>Day high: ${pair.day_high}</p>
        <p>Day low: ${pair.day_low}</p>
        `
    }).join("");

    return header +
        `<p>Country: ${pairs[0].Country}</p> 
            <p>Ticker: ${pairs[0].Ticker}</p>
            <p>Last month: ${pairs[0].lastMonth}</p>
            <p>Last week: ${pairs[0].lastWeek}</p>
            <p>Last year: ${pairs[0].lastYear}</p>
            <p>Start year: ${pairs[0].startYear}</p>` +
        body;
}

module.exports = createMarkup;