import { Button } from "@material-ui/core";
import { useWedding } from "../../providers/wedding";
import { ContainerCard, ContainerProducts } from "./syles";

export const Wedding = () => {
  const { weddingList, removeFromWedding } = useWedding();

  return (
    <ContainerProducts>
      {weddingList.length === 0 ? (
        <span>Nenhum item adicionado ao casamento!</span>
      ) : (
        <>
          {weddingList.map((item) => {
            return (
              <ContainerCard>
                <img src={item.image_url} alt={item.name} />
                <p>{item.name}</p>
                <p>Fabricado em: {item.first_brewed}</p>
                <p>{item.volume.value}L</p>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => removeFromWedding(item.id)}
                  >
                    Remover
                  </Button>
                </div>
              </ContainerCard>
            );
          })}
        </>
      )}
    </ContainerProducts>
  );
};