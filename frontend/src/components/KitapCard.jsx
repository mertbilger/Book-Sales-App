import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 400px;
  margin: 10px;
  height: 480px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (max-width: 767px) {
    height: auto;
    margin-left: 60px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
  flex-grow: 1;
`;

const Title = styled.h5`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Author = styled.p`
  margin-bottom: 4px;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-left: 22px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 10px;
  @media (max-width: 767px) {
    margin-left: 78px;
    width: 160px;
    ;
  }
`;

const KitapCard = ({ kitap }) => {
  return (
    <>
      <CardContainer>
        <Image src={kitap.fotoUrl} alt="Kitap Resmi" />
        <Content>
          <Title>{kitap.baslik}</Title>
          <Author>
            <strong>Yazar:</strong> {kitap.yazar}
          </Author>
          <Description>
            {kitap.aciklama}
          </Description>
        </Content>
      </CardContainer><Button>Sepete Ekle</Button>
    </>


  );
};

export default KitapCard;
