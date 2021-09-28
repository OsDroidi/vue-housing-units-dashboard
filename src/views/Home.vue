<template>
  <div>
    <section id="boat_services" class="my-5">
      <div class="container">
        <div class="title mb-1">
          <b-row>
            <div
              class="col-md-6 col-xl-4"
              v-for="unite in unites"
              :key="unite.id"
            >
              <router-link
                :to="{
                  name: 'UniteDetails',
                  params: {
                    title: unite.title,
                    location: unite.location,
                    details: unite.details,
                    image: unite.image,
                    price: unite.price,
                    likes: unite.likes,
                    rates: unite.rates,
                    id: unite.id,
                  },
                }"
              >
                <figure>
                  <img
                    class="align-content-md-start"
                    alt=""
                    :src="unite.image"
                  />
                  <figcaption class="inside">
                    <div><b-icon-heart></b-icon-heart> {{ unite.likes }}</div>
                  </figcaption>
                  <figcaption class="inside-populer">
                    <div v-if="unite.likes > 20">
                      <p
                        class="px-3 py-1 mb-3 bg-light text-dark shadow-sm mt-2"
                      >
                        Populer
                      </p>
                    </div>
                  </figcaption>

                  <figcaption class="outside">
                    <p class="small text-color mb-0 pt-2">
                      <b-icon-star-fill variant="warning"></b-icon-star-fill>
                      {{ unite.rates }}
                    </p>
                    <p class="small text-color mb-0">{{ unite.location }}</p>
                    <p class="text-desc">
                      {{ unite.title }}
                    </p>
                    <p class="text-desc">
                      <b>{{ unite.price }}</b> SR/Night
                    </p>
                  </figcaption>
                </figure>
              </router-link>
            </div>
          </b-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      unites: [
        {
          title: "Three Bedroom Apartment With Sea View",
          location: "King Abdullah Economic City - Bay La Sun Dist",
          details: `For Those Looking For Recreation And Tranquility, Where Space And Comfort, This Apartment Features Self-Entry And Consists Of A Hall Overlooking The Sea With A Sofa That Can Accommodate 10 People, 3 Bedrooms With A Master Bed And 4 Single Beds, A Kitchen Equipped With Oven, Refrigerator, Kettle, Cooking Utensils, Table With 8 Chairs, Two 2 W,C , And Many Features Such As Private Parking, Gym, Gym, Shared Swimming Pool For Adults And Children, Distinctive View Of The Sea And The Pool, With A Total Area Of ​​180 M`,
          image:
            "https://cdn.gathern.co/1/WXUfjaQf4glE2F7N_G3VKio8mWg6L-Pz-600x500.png",
          price: "1,500",
          likes: 55,
          rates: 120,
          id: 1,
        },
        {
          title: "Apartment With Balcony",
          location: "Riyadh - Al Yasmeen Dist.",
          details: `This Apartment Has Been Designed To Add A Spirit Of Calm And Comfort To The Guests, As It Contains A Bedroom With A Master Bed, A Side Sitting, A Preparatory Kitchen Available With (Refrigerator, Kettle), A W.C And An Outdoor Seating For 4 People With A Total Area Of ​​60 M In An Excellent Location North Of Riyadh`,
          image:
            "https://s3-eu-west-1.amazonaws.com/cdn.gathern.co/1/PqduJV3OAAaT31mOVr7WGBsylSQ1YP00-600x500.png",
          price: "384",
          likes: 5,
          rates: 4,
          id: 2,
        },
        {
          title: "Apartment With Two-Bedroom",
          location: "Riyadh - Al Nakheel Dist.",
          details: `Luxurious Apartment In The Most Prestigious Neighborhoods Of Riyadh Consisting Of Two Bedrooms With A Master Bed And A Single Bed, A Lounge With Sofas For 4 People And An Extra Majlis For 4 People, A Dressing Room And A Kitchen Equipped With (Oven, Refrigerator, Microwave, Kettle, Cooking Utensils, Coffee Machine), Dining Table With 4 Chairs, 3 W.C And Many More Features Such As Internet, Elevator, Additional Lighting, Self-Entry, Balcony, TV, Close To All Vital Areas Of Restaurants, Coffees And Services, And From King Saud University. It Contains Luxurious And Elegant Furniture In A Very Quiet And Secure Residential Complex .. With A Total Area 185 AD`,
          image:
            "https://s3-eu-west-1.amazonaws.com/cdn.gathern.co/1/HIxoQWgMHxtIjqTN3iy8-Kd1Ks6KfRXW-600x500.jpeg",
          price: "799",
          likes: 8,
          rates: 9.8,
          id: 3,
        },
        {
          title: "Three Bedroom Apartment With Sea View",
          location: "King Abdullah Economic City - Bay La Sun Dist",
          details: `For Those Looking For Recreation And Tranquility, Where Space And Comfort, This Apartment Features Self-Entry And Consists Of A Hall Overlooking The Sea With A Sofa That Can Accommodate 10 People, 3 Bedrooms With A Master Bed And 4 Single Beds, A Kitchen Equipped With Oven, Refrigerator, Kettle, Cooking Utensils, Table With 8 Chairs, Two 2 W,C , And Many Features Such As Private Parking, Gym, Gym, Shared Swimming Pool For Adults And Children, Distinctive View Of The Sea And The Pool, With A Total Area Of ​​180 M`,
          image:
            "https://cdn.gathern.co/1/WXUfjaQf4glE2F7N_G3VKio8mWg6L-Pz-600x500.png",
          price: "1,500",
          likes: 25,
          rates: 0,
          id: 4,
        },
        {
          title: "Apartment With Balcony",
          location: "Riyadh - Al Yasmeen Dist.",
          details: `This Apartment Has Been Designed To Add A Spirit Of Calm And Comfort To The Guests, As It Contains A Bedroom With A Master Bed, A Side Sitting, A Preparatory Kitchen Available With (Refrigerator, Kettle), A W.C And An Outdoor Seating For 4 People With A Total Area Of ​​60 M In An Excellent Location North Of Riyadh`,
          image:
            "https://s3-eu-west-1.amazonaws.com/cdn.gathern.co/1/PqduJV3OAAaT31mOVr7WGBsylSQ1YP00-600x500.png",
          price: "384",
          likes: 8,
          rates: 10,
          id: 5,
        },
        {
          title: "Apartment With Two-Bedroom",
          location: "Riyadh - Al Nakheel Dist.",
          details: `Luxurious Apartment In The Most Prestigious Neighborhoods Of Riyadh Consisting Of Two Bedrooms With A Master Bed And A Single Bed, A Lounge With Sofas For 4 People And An Extra Majlis For 4 People, A Dressing Room And A Kitchen Equipped With (Oven, Refrigerator, Microwave, Kettle, Cooking Utensils, Coffee Machine), Dining Table With 4 Chairs, 3 W.C And Many More Features Such As Internet, Elevator, Additional Lighting, Self-Entry, Balcony, TV, Close To All Vital Areas Of Restaurants, Coffees And Services, And From King Saud University. It Contains Luxurious And Elegant Furniture In A Very Quiet And Secure Residential Complex .. With A Total Area 185 AD`,
          image:
            "https://s3-eu-west-1.amazonaws.com/cdn.gathern.co/1/HIxoQWgMHxtIjqTN3iy8-Kd1Ks6KfRXW-600x500.jpeg",
          price: "799",
          likes: 23,
          rates: 9.8,
          id: 6,
        },
      ],
    };
  },
};
</script>

<style></style>
