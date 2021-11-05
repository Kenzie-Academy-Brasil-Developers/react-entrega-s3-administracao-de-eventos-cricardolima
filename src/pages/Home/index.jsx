import { Cards } from "../../components/Cards";
import { useProducts } from "../../providers/products";
import { ContainerProducts } from "./syles";

export const Home = () => {
    const {products} = useProducts();

  return (
    <ContainerProducts>
        {products.map(item => (
            <div>
                <Cards item={item} key={item.id}/>
            </div>
        ))}
    </ContainerProducts>
  )
};
