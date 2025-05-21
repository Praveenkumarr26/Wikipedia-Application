Here's a detailed **README.md** file for your Wikipedia Search application that you can add to your GitHub repository:

```markdown
# Wikipedia Search Application

![Wikipedia Logo](https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png)

A responsive web application that allows users to search Wikipedia articles directly from the interface. Built with HTML, CSS, and JavaScript.

## Features

- **Real-time Search**: Get Wikipedia results instantly as you type
- **Clean UI**: Modern, user-friendly interface with responsive design
- **Loading Indicator**: Spinner animation during API requests
- **Direct Links**: All results link directly to Wikipedia articles
- **Error Handling**: Graceful error messages when things go wrong

## Live Demo

[View Live Demo](https://your-username.github.io/Wikipedia-Application) (after deploying to GitHub Pages)

## Screenshots

| Search Interface | Results Display |
|------------------|-----------------|
| ![Search Page](screenshots/search-empty.png) | ![Results Page](screenshots/search-results.png) |

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Styling**: Bootstrap 4.5, Google Fonts
- **API**: Custom Wikipedia search API endpoint
- **Version Control**: Git, GitHub

## Installation

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/Praveenkumarr26/Wikipedia-Application.git
```

2. Open the project folder:
```bash
cd Wikipedia-Application
```

3. Open `index.html` in your browser (no server required)

## How It Works

1. User enters search query in the input field
2. Application makes API call to Wikipedia search endpoint
3. Results are displayed in card format with:
   - Article title (linked)
   - URL to the article
   - Short description
4. Clicking any result opens the Wikipedia article in a new tab

## API Reference

This project uses a custom endpoint that proxies Wikipedia's API:
```
GET https://apis.ccbp.in/wiki-search?search={query}
```

Response format:
```json
{
  "search_results": [
    {
      "title": "Article Title",
      "link": "https://en.wikipedia.org/wiki/Article",
      "description": "Article description..."
    }
  ]
}
```

## Project Structure

```
Wikipedia-Application/
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── script.js           # Main application logic
├── README.md           # This file
└── screenshots/        # Screenshots for documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Wikipedia for their extensive knowledge base
- CCBP.in for the API endpoint
- Bootstrap for responsive design components
```

### How to Add This to Your Project:

1. Create a new file named `README.md` in your project root
2. Copy and paste the above content
3. Customize sections as needed (especially the live demo URL)
4. Add screenshots in a `/screenshots` folder (optional but recommended)
5. Commit and push:
```bash
git add README.md
git commit -m "Add detailed README file"
git push origin main
```
