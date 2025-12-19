const ArticleCard = (props) => {
  return (
<div className="card" >
<h3>{props.article.title}</h3>
<p>Auteur:{props.user?.name}</p>
<p>{props.article.excerpt}</p>

</div>
  )
}

export default ArticleCard