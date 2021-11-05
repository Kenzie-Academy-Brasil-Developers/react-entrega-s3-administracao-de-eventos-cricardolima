import { Button } from "@material-ui/core";
import { useProm } from "../../providers/prom";
import { ContainerCard, ContainerProducts } from "./syles";

export const Prom = () => {
  const { promList, removeFromProm } = useProm();

  return (
    <ContainerProducts>
      {promList.length === 0 ? (
        <span>Nenhum item adicionado a formatura!</span>
      ) : (
        <>
          {promList.map((item) => {
            return (
              <ContainerCard>
                <img src={item.image_url} alt={item.name} />
                <p>{item.name}</p>
                <p>Fabricado em: {item.first_brewed}</p>
                <p>{item.volume.value}L</p>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => removeFromProm(item.id)}
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
