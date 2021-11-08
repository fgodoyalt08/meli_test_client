import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import ICardProps from './ICardProps';
import formatForMoney from 'helpers/formatForMoney';

const Card = ({ onClick, item }: ICardProps) => {

  const imageUrl: string = item.picture;
  const description: string = item.title;
  const price: number = item.price.amount;
  const free_shipping: boolean = item.free_shipping;

  return (
    <div onClick={onClick} className={Style.card}>
      <div className={Style.cardImageContainer}>
        <Image className={Style.cardImage} src={imageUrl} width={180} height={180} alt={description} />
      </div>
      <div className={Style.cardDescriptionContainer}>
        <div className={Style.cardTitleContainer}>
          <span className={Style.cardTitle}>
            $ {formatForMoney(Number(price))}
            {free_shipping && <span className={Style.shippingFree}>F</span>}
          </span>
        </div>
        <div className={Style.cardDescription}>
          <span>{description}</span>
        </div>
      </div>
      <div className={Style.cardAditionalDescriptionContainer}>
        <span className={Style.cardTitleSecondary}>Capital Federal</span>
      </div>
    </div>
  );
};

export default Card;
