import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap"
						rel="stylesheet"
					/>

					{/* <link rel="stylesheet" href="/css/bootstrap.min.css" /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
						crossOrigin="anonymous"
					></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
