import data from '../../data/Db.json'

const ArticleDetails = () => {
    return (
    <div>
      {
        data && data.articles.map( article => {
          return(
            <article>
            <h2>{article.title}</h2>
            <p>by : {article.author}</p>
            <p>
              {article.content}
            </p>
            </article>
          )
        })
      }
    </div>
  )
}

export default ArticleDetails
