import { GatheringProvider } from "./gathering";
import { ProductsProvider } from "./products";
import { PromProvider } from "./prom";
import { WeddingProvider } from "./wedding";

export const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <GatheringProvider>
        <WeddingProvider>
          <PromProvider>{children}</PromProvider>
        </WeddingProvider>
      </GatheringProvider>
    </ProductsProvider>
  );
};
