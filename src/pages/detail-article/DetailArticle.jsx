import articlesData from "../data/articles.json";
import usersData from "../data/users.json";

export default function detailArticle() {
  return (
    <div>
      {articlesData.articles.map(article => {
        const author = usersData.users.find(u => u.id === article.author);

        return (
          <div key={article.id} className="card">
            <h2>{article.title}</h2>
            <p>Écrit par : {author ? author.name : "Auteur inconnu"}</p>
            <p>{article.excerpt}</p>
          </div>
        );
      })}
    </div>
  );
}
