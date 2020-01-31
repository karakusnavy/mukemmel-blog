
// import 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700';
// import '../public/css/linearicons.css'
// import '../public/css/font-awesome.min.css'
// import '../public/css/bootstrap.css'
// import '../public/css/animate.min.css'
// import '../public/css/main.css'


// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//     static async getInitialProps(ctx) {
//         console.log("aasdasdas")
//         const initialProps = await Document.getInitialProps(ctx);
//         return { ...initialProps };
//     }

//     render() {
//         return (
//             <Html lang="tr">
//                 <Head>
//                     <link rel="shortcut icon" href="img/fav.png"></link>
//                     <meta name="author" content="codepixer"></meta>
//                     <meta name="description" content=""></meta>
//                     <meta name="keywords" content=""></meta>
//                     <meta charSet="UTF-8"></meta>
//                     <title>Samed Karakuş - Kişisel</title>
//                     <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"></link>
//                     <link rel="stylesheet" href="/css/linearicons.css"></link>
//                     <link rel="stylesheet" href="/css/font-awesome.min.css"></link>
//                     <link rel="stylesheet" href="/css/bootstrap.css"></link>
//                     <link rel="stylesheet" href="/css/animate.min.css"></link>
//                     <link rel="stylesheet" href="/css/main.css"></link>
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         );
//     }
// }

// export default MyDocument;




import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        console.log('testtt')
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="img/fav.png"></link>
                    <meta name="author" content="codepixer"></meta>
                    <meta name="description" content=""></meta>
                    <meta name="keywords" content=""></meta>
                    <meta charSet="UTF-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                    <title>Samed Karakuş - Kişisel</title>
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/css/linearicons.css"></link>
                    <link rel="stylesheet" href="/css/font-awesome.min.css"></link>
                    <link rel="stylesheet" href="/css/bootstrap.css"></link>
                    <link rel="stylesheet" href="/css/animate.min.css"></link>
                    <link rel="stylesheet" href="/css/main.css"></link>
                    <script src="/js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="/js/vendor/bootstrap.min.js"></script>
                    <script src="/js/jquery.sticky.js"></script>
                    <script src="/js/jquery.nice-select.min.js"></script>
                    <script src="/js/main.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument