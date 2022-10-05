import axios from "axios";
import {useEffect,useState} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Home() {
  const [quote, setQuote] = useState(null);

 useEffect(() => {
    axios.get(baseURL).then((response) => {
      setQuote(response.data);
    });
  }, []);
  
  if (!quote) return null;

  return (
    <div>
      {quote.title}
    </div>
  );
}
export default Home;