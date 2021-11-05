import { Button } from "@material-ui/core";
import { useGathering } from "../../providers/gathering";
import { ContainerCard, ContainerProducts } from "./syles";

export const Gathering = () => {
  const { gatheringList, removeFromGathering } = useGathering();

  return (
    <ContainerProducts>
      {gatheringList.length === 0 ? (
          <span>Nenhum item adicionado a confraternização!</span>
    ) : (
        <>
          {gatheringList.map((item) => {
              return (
                <ContainerCard>
                    <img src={item.image_url} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Fabricado em: {item.first_brewed}</p>
                    <p>{item.volume.value}L</p>
                    <div>
                        <Button variant="contained" onClick={() => removeFromGathering(item.id)}>Remover</Button>
                    </div>
                </ContainerCard>
              )})}
        </>
    )}
    </ContainerProducts>
  );
};
