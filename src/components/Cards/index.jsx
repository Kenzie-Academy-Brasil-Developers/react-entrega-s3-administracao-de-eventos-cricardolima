import { Button } from "@material-ui/core";
import { useGathering } from "../../providers/gathering";
import { useProm } from "../../providers/prom";
import { useWedding } from "../../providers/wedding";
import { ContainerCard } from "./styles";

export const Cards = ({item}) => {
  const { addDrinksToGathering } = useGathering();
  const { addDrinksToWedding } = useWedding();
  const { addDrinksToProm } = useProm();
  return (
    <ContainerCard>
      <img src={item.image_url} alt={item.name} />
      <p>{item.name}</p>
      <p>Fabricado em: {item.first_brewed}</p>
      <details>{item.description}</details>
      <p>{item.volume.value}L</p>
      <div>
        <Button variant="contained" color="primary" onClick={() => addDrinksToProm(item)}>
          Formatura
        </Button>
        <Button variant="contained" color="primary" onClick={() => addDrinksToWedding(item)}>
          Casamento
        </Button>
        <Button variant="contained" color="primary" onClick={() => addDrinksToGathering(item)}>
          Confraternização
        </Button>
      </div>
    </ContainerCard>
  );
};
