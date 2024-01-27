import { useState } from 'react';
import styled from 'styled-components';
import { useKitapContext } from '../hooks/useKitapContext';
import Toolbar from "../components/Toolbar"


const ACardContainer = styled.div`
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

const AImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const AContent = styled.div`
  padding: 10px;
  flex-grow: 1;
`;

const ATitle = styled.h5`
  font-size: 18px;
  margin-bottom: 8px;
`;

const AAuthor = styled.p`
  margin-bottom: 4px;
`;

const ADescription = styled.p`
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
`;

const AdminKitapCard = ({ kitap }) => {
  const { dispatch } = useKitapContext();

  const handleClick = async () => {
    const response = await fetch('/api/kitaplar/' + kitap._id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'KITAP_SIL', payload: json });
    }
  };

  return (
    <>
      <ACardContainer>
        <button type='button' className='btn btn-danger mb-2 w-100' onClick={handleClick} style={{ cursor: "pointer" }}>SİL</button>
        <AImage src={kitap.fotoUrl} alt="Kitap Resmi" />
        <AContent>
          <ATitle>{kitap.baslik}</ATitle>
          <AAuthor>
            <strong>Yazar:</strong> {kitap.yazar}
          </AAuthor>
          <ADescription>{kitap.aciklama}</ADescription>
        </AContent>
        </ACardContainer>
    </>

  );
};

export default AdminKitapCard;
