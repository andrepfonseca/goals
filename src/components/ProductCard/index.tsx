import { Image, View } from "react-native";
import { styles } from "./styles";
import { ProgressBar, Typography } from "components";
import { useProductCardViewController } from "./useProductCardViewController";

export type ProductCardType = {
  id: number;
  image: string;
  title: string;
  price: number;
  remainingValue: number;
  percentage: number;
};

export const ProductCard = ({
  id,
  image,
  title,
  price,
  remainingValue,
}: ProductCardType) => {
  const {
    price: formattedPrice,
    remainingValue: formattedRemainingValue,
    percentage,
  } = useProductCardViewController({ price, remainingValue });

  return (
    <View style={styles.card} key={id}>
      <Image src={image} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Typography variant="title" style={styles.cardTitle}>
            {title}
          </Typography>
          <View style={styles.valueContainer}>
            <Typography variant="subtitle" style={styles.valueTitle}>
              Valor:
            </Typography>
            <Typography variant="body" style={styles.value}>
              {formattedPrice}
            </Typography>
          </View>
          <View style={styles.valueContainer}>
            <Typography variant="subtitle" style={styles.valueTitle}>
              Quanto você tem:
            </Typography>
            <Typography variant="body" style={styles.value}>
              {formattedRemainingValue}
            </Typography>
          </View>
        </View>
        <View style={styles.cardProgress}>
          <ProgressBar size="medium" progress={percentage} />
        </View>
      </View>
    </View>
  );
};
