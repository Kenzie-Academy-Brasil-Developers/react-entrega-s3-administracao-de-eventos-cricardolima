import styled from "styled-components";

export const ContainerProducts = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 10px 0px;
  gap: 50px;

  img {
    height: 150px;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  span {
      color: #1976D2;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 800;
  }
`;

export const ContainerCard = styled.div`
    width: 250px;
    height: fit-content;
    margin: 15px 5px;
    padding: 20px 0px;
    text-align: center;
    border: 2px solid teal;
    border-radius: 8px;

    img {
        height: 150px;
        margin-bottom: 10px;
    }

    p{
        font-size: 15px;
        font-weight: 800;
        margin-bottom: 10px;
    }

    div {
        padding: 0px 10px;
    }
`
