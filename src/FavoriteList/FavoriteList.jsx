export default function FavoriteList(props) {
  const favoriteGifs = props.favoriteList.map((gif) => (
    <img src={gif} alt="gif" />
  ))
  return <>{favoriteGifs}</>
}
