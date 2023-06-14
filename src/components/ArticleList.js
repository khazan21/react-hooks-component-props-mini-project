import Article from "./Article"

function ArticleList({ posts }) {

    const arrayOfArticles = posts.map((article) => {
        // add article component here
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
    })

    return (
        <main>
            {arrayOfArticles}
        </main>
    )
}

export default ArticleList;