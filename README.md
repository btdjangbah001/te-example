# Small website that displays currency pair information

After loading the page, a request is fired using the getMarketHistory function to get results about currency pairs. You then choose a currency pair you're interested in in the dropdown, and then on the button click, information about that currency pair gets printed on the screen.

Initially I had plans on using machine learning models (sklearn) to train dataset I'd get back in order to predict future currency pair performance to advise a potential trader on what currency to buy first as long with some graphs for data visualization.

But the data I got back from the endpoint was so limiting that it was not possible to do any kind of calculation on them so I decided to go with a simple solution that is to build a website that displays information about a currency pair.