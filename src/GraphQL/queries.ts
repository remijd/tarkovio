import { gql } from "graphql-request";

export const tarkovAmmo = gql`
  query {
    ammo {
      item {
        name
      }
      caliber
      tracer
      damage
      armorDamage
    }
  }
`;
