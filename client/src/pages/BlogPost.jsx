"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Mail } from "lucide-react"

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Himachal Pradesh",
    date: "May 15, 2023",
    author: "Priya Sharma",
    category: "Destinations",
    tags: ["Himachal Pradesh", "Hidden Gems", "Mountains", "Travel Tips"],
    image: "https://source.unsplash.com/random/1200x600/?Himachal,Pradesh,mountains",
    description: "Discover the lesser-known but breathtaking destinations in Himachal Pradesh that most tourists miss.",
    content: `
      <p>Himachal Pradesh, nestled in the western Himalayas, is a paradise for nature lovers and adventure seekers. While popular destinations like Shimla, Manali, and Dharamshala attract millions of tourists every year, there are numerous hidden gems waiting to be explored.</p>
      
      <h2>1. Khajjiar - The Mini Switzerland of India</h2>
      <p>Often referred to as the "Mini Switzerland of India," Khajjiar is a picturesque meadow surrounded by dense cedar forests. Located near Dalhousie, this serene destination offers breathtaking views of the Dhauladhar range. The Khajjiar Lake in the center of the meadow adds to its charm.</p>
      
      <h2>2. Tirthan Valley - A Riverside Haven</h2>
      <p>Tirthan Valley, named after the Tirthan River, is a hidden paradise for those seeking solitude. The valley offers excellent opportunities for trout fishing, trekking, and bird watching. The Great Himalayan National Park, a UNESCO World Heritage Site, is also accessible from here.</p>
      
      <h2>3. Chamba - Ancient Temples and Art</h2>
      <p>Chamba, one of the oldest hill stations in Himachal, is known for its ancient temples, palaces, and handicrafts. The Chamba Rumal, a form of embroidery, is a specialty of this region. The town's architecture reflects a blend of Rajput and Mughal influences.</p>
      
      <h2>4. Spiti Valley - The Middle Land</h2>
      <p>Spiti Valley, often described as a world within a world, is a cold desert mountain valley located high in the Himalayas. The region is known for its Buddhist monasteries, including the Key Monastery and Tabo Monastery, which are over a thousand years old.</p>
      
      <h2>5. Barot - Angler's Paradise</h2>
      <p>Barot, situated on the banks of the Uhl River, is a paradise for anglers. The Barot Dam, built in the 1920s, is a major attraction. The surrounding forests are home to diverse flora and fauna, making it a perfect destination for nature lovers.</p>
      
      <h2>6. Prashar Lake - Mystical Beauty</h2>
      <p>Prashar Lake, located at an altitude of 2,730 meters, is surrounded by the majestic Dhauladhar ranges. The lake has a floating island in it and is considered sacred by the locals. The three-storied pagoda-like temple near the lake is dedicated to Sage Prashar.</p>
      
      <h2>7. Chitkul - The Last Village</h2>
      <p>Chitkul, the last inhabited village near the Indo-Tibet border, is known for its pristine beauty. The village is surrounded by apple orchards and potato fields. The wooden houses with slate roofs add to the charm of this remote village.</p>
      
      <h2>8. Kalpa - Apple Orchards and Mountain Views</h2>
      <p>Kalpa, located in the Kinnaur district, offers panoramic views of the Kinner Kailash range. The village is surrounded by apple orchards and pine nut forests. The ancient Hu-Bu-Lan-Kar monastery is a major attraction.</p>
      
      <h2>9. Narkanda - Skiing Destination</h2>
      <p>Narkanda, located at an altitude of 2,708 meters, is a popular skiing destination during winters. The Hatu Peak, the highest point in the region, offers breathtaking views of the surrounding mountains.</p>
      
      <h2>10. Bir Billing - Paragliding Capital</h2>
      <p>Bir Billing, known as the paragliding capital of India, offers one of the best paragliding experiences in Asia. The region is also known for its Tibetan monasteries and a stupa that houses a 14-meter-high statue of Padmasambhava, also known as Guru Rinpoche.</p>
      
      <p>These hidden gems in Himachal Pradesh offer a perfect escape from the hustle and bustle of city life. Whether you're an adventure enthusiast, a nature lover, or someone seeking solitude, Himachal has something for everyone.</p>
    `,
  },
  {
    id: 2,
    title: "A Foodie's Guide to South Indian Cuisine",
    date: "June 2, 2023",
    author: "Rahul Menon",
    category: "Food & Culture",
    tags: ["South Indian", "Food", "Cuisine", "Travel", "Culture"],
    image: "https://source.unsplash.com/random/1200x600/?South,Indian,food",
    description: "Explore the rich and diverse flavors of South Indian cuisine beyond idli and dosa.",
    content: `
      <p>South Indian cuisine is a culinary delight that offers a wide range of flavors, textures, and aromas. While idli and dosa are the most recognized dishes, the cuisine has much more to offer. Let's embark on a gastronomic journey through South India.</p>
      
      <h2>The Essence of South Indian Cuisine</h2>
      <p>South Indian cuisine is characterized by its use of rice, lentils, coconut, and a variety of spices. The cuisine is predominantly vegetarian, although coastal regions incorporate seafood and meat into their diet. The use of tamarind, curry leaves, and mustard seeds gives South Indian dishes their distinctive flavor.</p>
      
      <h2>Kerala: God's Own Country and Its Cuisine</h2>
      <p>Kerala's cuisine is as diverse as its landscape. The state's long coastline influences its culinary traditions, with seafood being a staple. Some must-try dishes include:</p>
      <ul>
        <li><strong>Appam with Stew</strong>: Lacy, bowl-shaped pancakes made from fermented rice flour, served with a mildly spiced coconut milk stew.</li>
        <li><strong>Kerala Sadya</strong>: A feast served on a banana leaf, consisting of rice and a variety of vegetarian dishes.</li>
        <li><strong>Malabar Biryani</strong>: A fragrant rice dish cooked with meat, spices, and herbs.</li>
        <li><strong>Puttu and Kadala Curry</strong>: Steamed rice cake served with black chickpea curry.</li>
      </ul>
      
      <h2>Tamil Nadu: The Land of Temples and Tiffin</h2>
      <p>Tamil cuisine is known for its use of tamarind, which gives the dishes a tangy flavor. The state is famous for its "tiffin" or snack items. Some popular dishes include:</p>
      <ul>
        <li><strong>Pongal</strong>: A savory rice and lentil dish tempered with cumin, pepper, and curry leaves.</li>
        <li><strong>Chettinad Cuisine</strong>: Known for its use of spices, especially black pepper.</li>
        <li><strong>Filter Coffee</strong>: A strong coffee made with chicory, served in a traditional brass tumbler.</li>
        <li><strong>Madurai Jigarthanda</strong>: A cold beverage made with milk, almond gum, and ice cream.</li>
      </ul>
      
      <h2>Andhra Pradesh and Telangana: The Spice Capitals</h2>
      <p>Andhra cuisine is known for its fiery spices and tangy flavors. The cuisine makes extensive use of red chilies, tamarind, and sesame seeds. Some must-try dishes include:</p>
      <ul>
        <li><strong>Hyderabadi Biryani</strong>: A fragrant rice dish cooked with meat, spices, and herbs.</li>
        <li><strong>Gongura Pachadi</strong>: A tangy chutney made from sorrel leaves.</li>
        <li><strong>Pesarattu</strong>: A green gram dosa served with ginger chutney.</li>
        <li><strong>Andhra Chicken Curry</strong>: A spicy chicken curry made with a blend of spices.</li>
      </ul>
      
      <h2>Karnataka: The Land of Coffee and Bisi Bele Bath</h2>
      <p>Karnataka's cuisine is influenced by its neighboring states, resulting in a diverse culinary tradition. The state is known for its coffee plantations and the aromatic filter coffee. Some popular dishes include:</p>
      <ul>
        <li><strong>Bisi Bele Bath</strong>: A spicy rice dish made with lentils, vegetables, and a special spice blend.</li>
        <li><strong>Mysore Pak</strong>: A sweet made from gram flour, ghee, and sugar.</li>
        <li><strong>Neer Dosa</strong>: A thin, watery dosa made from rice batter.</li>
        <li><strong>Coorg Pandi Curry</strong>: A spicy pork curry from the Coorg region.</li>
      </ul>
      
      <h2>The Art of Eating with Hands</h2>
      <p>In South India, food is traditionally eaten with hands, specifically the right hand. This practice is believed to enhance the dining experience by engaging all the senses. The fingers help in mixing the rice with the curry, ensuring that each bite has the perfect balance of flavors.</p>
      
      <h2>South Indian Coffee Culture</h2>
      <p>South India has a rich coffee culture, with filter coffee being a staple in many households. The coffee is brewed in a traditional filter and mixed with hot milk and sugar. It is then poured back and forth between a tumbler and a davara (a wide-mouthed vessel) to create a frothy texture.</p>
      
      <p>South Indian cuisine, with its diverse flavors and cooking techniques, offers a gastronomic experience like no other. Whether you're a vegetarian or a meat lover, there's something for everyone in this culinary paradise.</p>
    `,
  },
  {
    id: 3,
    title: "Monsoon Travel: Best Places to Visit During Rainy Season",
    date: "July 10, 2023",
    author: "Ananya Patel",
    category: "Travel Tips",
    tags: ["Monsoon", "Travel", "Rainy Season", "India", "Tips"],
    image: "https://source.unsplash.com/random/1200x600/?India,monsoon,travel",
    description: "Embrace the rain and explore these beautiful destinations that come alive during the monsoon season.",
    content: `
      <p>The monsoon season in India, typically from June to September, transforms the landscape into a lush green paradise. While many travelers avoid this season due to the rain, it's actually one of the best times to explore certain destinations in India. The rain washes away the dust, the temperature drops, and the countryside comes alive with vibrant colors.</p>
      
      <h2>Why Travel During Monsoon?</h2>
      <p>Traveling during the monsoon season has several advantages:</p>
      <ul>
        <li>Lower prices for accommodation and activities</li>
        <li>Fewer tourists, meaning less crowded attractions</li>
        <li>Lush green landscapes and flowing waterfalls</li>
        <li>Pleasant weather, especially in places that are otherwise hot</li>
        <li>Unique experiences like river rafting and monsoon festivals</li>
      </ul>
      
      <h2>1. Goa: Beyond the Beaches</h2>
      <p>Goa, known for its beaches, takes on a different charm during the monsoon. The rain transforms the landscape into a lush green paradise. The Dudhsagar Falls, one of India's tallest waterfalls, is at its majestic best during this season. The Spice Plantations are also worth a visit, as they are in full bloom.</p>
      
      <h2>2. Kerala: God's Own Country in the Rain</h2>
      <p>Kerala, with its backwaters, beaches, and hill stations, is a year-round destination. However, the monsoon season, known locally as "Karkidakam," is a special time. The rain rejuvenates the landscape, and it's the perfect time for Ayurvedic treatments. The Periyar River is in full flow, and the Athirapally Falls, often called the "Niagara of India," is a sight to behold.</p>
      
      <h2>3. Valley of Flowers, Uttarakhand: A Floral Paradise</h2>
      <p>The Valley of Flowers National Park in Uttarakhand is a UNESCO World Heritage Site that comes alive during the monsoon. The valley, nestled in the Western Himalayas, is home to a diverse range of alpine flowers, many of which bloom only during this season. The trek to the valley is challenging but rewarding, with breathtaking views of the surrounding mountains.</p>
      
      <h2>4. Coorg, Karnataka: The Scotland of India</h2>
      <p>Coorg, also known as Kodagu, is a hill station in Karnataka known for its coffee plantations, waterfalls, and misty landscapes. During the monsoon, the region is enveloped in a blanket of mist, giving it a mystical charm. The Abbey Falls and Iruppu Falls are at their majestic best, and the coffee plantations are lush and green.</p>
      
      <h2>5. Udaipur, Rajasthan: The City of Lakes</h2>
      <p>Udaipur, known for its palaces and lakes, is a popular tourist destination. During the monsoon, the lakes are full, and the palaces reflect in the clear water, creating a magical ambiance. The surrounding Aravalli Hills are lush and green, offering a stark contrast to the dry landscape of the rest of the year.</p>
      
      <h2>6. Cherrapunji and Mawsynram, Meghalaya: The Wettest Places on Earth</h2>
      <p>Cherrapunji and Mawsynram in Meghalaya are among the wettest places on Earth. During the monsoon, the region receives record rainfall, creating a unique landscape of waterfalls, living root bridges, and lush forests. The living root bridges, made by the Khasi tribe by training the roots of the Indian rubber tree, are a marvel of natural engineering.</p>
      
      <h2>7. Lonavala and Khandala, Maharashtra: Weekend Getaways</h2>
      <p>Lonavala and Khandala, twin hill stations near Mumbai and Pune, are popular weekend getaways. During the monsoon, the hills are covered in a green carpet, and numerous waterfalls dot the landscape. The Tiger's Leap, a cliff-top with a sheer drop, offers panoramic views of the valley.</p>
      
      <h2>8. Munnar, Kerala: Tea Gardens in the Rain</h2>
      <p>Munnar, a hill station in Kerala, is known for its tea plantations. During the monsoon, the tea gardens are lush and green, and the mist adds a mystical charm to the landscape. The Attukal Waterfalls and the Nyayamakad Waterfalls are at their majestic best during this season.</p>
      
      <h2>Monsoon Travel Tips</h2>
      <p>While traveling during the monsoon can be rewarding, it's essential to be prepared:</p>
      <ul>
        <li>Carry waterproof clothing and footwear</li>
        <li>Pack light and carry quick-dry clothes</li>
        <li>Carry insect repellent, as the monsoon is also the breeding season for mosquitoes</li>
        <li>Check weather forecasts and road conditions before traveling</li>
        <li>Carry basic medications, especially for cold and fever</li>
        <li>Be flexible with your itinerary, as some activities might be canceled due to heavy rain</li>
      </ul>
      
      <p>The monsoon season offers a unique perspective of India, with lush landscapes, flowing waterfalls, and fewer tourists. It's a time when nature is at its vibrant best, and the rain adds a romantic charm to the journey. So, embrace the rain and embark on a monsoon adventure!</p>
    `,
  },
  {
    id: 4,
    title: "Budget Travel: Exploring India Under ₹20,000",
    date: "August 5, 2023",
    author: "Vikram Singh",
    category: "Budget Travel",
    tags: ["Budget", "Travel", "India", "Tips", "Backpacking"],
    image: "https://source.unsplash.com/random/1200x600/?India,budget,travel",
    description: "Tips and destinations for travelers looking to explore India without breaking the bank.",
    content: `
      <p>India, with its diverse landscapes, rich culture, and historical monuments, offers a plethora of experiences for travelers. The best part? You don't need to spend a fortune to explore this beautiful country. With careful planning and smart choices, you can embark on a memorable journey across India on a budget of under ₹20,000.</p>
      
      <h2>Planning Your Budget Trip</h2>
      <p>Before diving into the destinations, let's discuss some general tips for budget travel in India:</p>
      <ul>
        <li><strong>Travel during the off-season</strong>: Prices for accommodation and activities are lower, and there are fewer tourists.</li>
        <li><strong>Use public transportation</strong>: Trains and buses are not only economical but also offer a glimpse into the local way of life.</li>
        <li><strong>Stay in budget accommodations</strong>: Hostels, guesthouses, and homestays offer affordable options without compromising on comfort.</li>
        <li><strong>Eat local</strong>: Street food and local eateries offer delicious meals at a fraction of the cost of restaurants.</li>
        <li><strong>Plan and book in advance</strong>: Last-minute bookings can be expensive, especially during peak season.</li>
      </ul>
      
      <h2>1. Varanasi: The Spiritual Capital</h2>
      <p>Varanasi, one of the oldest continuously inhabited cities in the world, offers a spiritual experience like no other. The ghats along the Ganges River, the narrow alleys, and the ancient temples create a mystical ambiance.</p>
      <p><strong>Budget Breakdown</strong>:</p>
      <ul>
        <li>Accommodation: ₹300-500 per night in a budget guesthouse</li>
        <li>Food: ₹150-300 per day, eating at local eateries</li>
        <li>Transportation: ₹50-100 per day for local travel</li>
        <li>Activities: Many activities, like watching the Ganga Aarti or exploring the ghats, are free</li>
      </ul>
      <p><strong>Total for 3 days</strong>: Approximately ₹1,500-2,700</p>
      
      <h2>2. Jaipur: The Pink City</h2>
      <p>Jaipur, the capital of Rajasthan, is known for its pink-hued buildings, majestic forts, and vibrant markets. The city offers a blend of history, culture, and shopping experiences.</p>
      <p><strong>Budget Breakdown</strong>:</p>
      <ul>
        <li>Accommodation: ₹500-800 per night in a budget hotel or hostel</li>
        <li>Food: ₹200-400 per day, trying local Rajasthani cuisine</li>
        <li>Transportation: ₹100-200 per day for local travel</li>
        <li>Activities: Entry fees for forts and palaces range from ₹50-500</li>
      </ul>
      <p><strong>Total for 3 days</strong>: Approximately ₹2,550-4,200</p>
      
      <h2>3. Hampi: The Ancient Ruins</h2>
      <p>Hampi, a UNESCO World Heritage Site, is known for its ancient ruins, boulder-strewn landscape, and laid-back vibe. The ruins of the Vijayanagara Empire spread across a vast area, offering a glimpse into the past.</p>
      <p><strong>Budget Breakdown</strong>:</p>
      <ul>
        <li>Accommodation: ₹300-600 per night in a guesthouse</li>
        <li>Food: ₹150-300 per day, eating at local cafes</li>
        <li>Transportation: ₹100-200 per day for renting a bicycle or auto-rickshaw</li>
        <li>Activities: Entry fee for the main archaeological site is ₹500 for foreigners and ₹30 for Indians</li>
      </ul>
      <p><strong>Total for 3 days</strong>: Approximately ₹1,650-3,300</p>
      
      <h2>4. Rishikesh: The Yoga Capital</h2>
      <p>Rishikesh, nestled in the foothills of the Himalayas, is known for its yoga centers, ashrams, and the holy Ganges River. The city offers a perfect blend of spirituality and adventure.</p>
      <p><strong>Budget Breakdown</strong>:</p>
      <ul>
        <li>Accommodation: ₹300-600 per night in an ashram or budget guesthouse</li>
        <li>Food: ₹150-300 per day, eating at local eateries</li>
        <li>Transportation: ₹50-100 per day for local travel</li>
        <li>Activities: Yoga classes range from ₹100-500, and many activities like visiting the Beatles Ashram or watching the Ganga Aarti are free or have minimal charges</li>
      </ul>
      <p><strong>Total for 3 days</strong>: Approximately ₹1,500-3,000</p>
      
      <h2>5. Gokarna: The Serene Beaches</h2>
      <p>Gokarna, a small temple town in Karnataka, is known for its pristine beaches and laid-back atmosphere. It's a perfect alternative to the more commercialized beaches of Goa.</p>
      <p><strong>Budget Breakdown</strong>:</p>
      <ul>
        <li>Accommodation: ₹400-700 per night in a beach hut or guesthouse</li>
        <li>Food: ₹200-400 per day, eating at beach shacks and local eateries</li>
        <li>Transportation: ₹100-200 per day for local travel</li>
        <li>Activities: Most activities, like beach hopping or visiting temples, are free</li>
      </ul>
      <p><strong>Total for 3 days</strong>: Approximately ₹2,100-3,900</p>
      
      <h2>Transportation Between Destinations</h2>
      <p>India has an extensive network of trains and buses that connect major cities and towns. Overnight trains and buses not only save on transportation costs but also on a night's accommodation.</p>
      <p><strong>Approximate costs</strong>:</p>
      <ul>
        <li>Sleeper class train: ₹500-1,000 for long distances</li>
        <li>State-run buses: ₹300-700 for long distances</li>
        <li>Private buses: ₹500-1,000 for long distances with more comfort</li>
      </ul>
      <p>For a 15-day trip covering the above destinations, transportation costs would be approximately ₹3,000-5,000.</p>
      
      <h2>Total Budget for a 15-day Trip</h2>
      <p>Combining the costs for the above destinations and transportation:</p>
      <ul>
        <li>Accommodation and local expenses for 15 days: ₹9,300-17,100</li>
        <li>Transportation between destinations: ₹3,000-5,000</li>
        <li>Miscellaneous expenses: ₹2,000-3,000</li>
      </ul>
      <p><strong>Total</strong>: Approximately ₹14,300-25,100</p>
      
      <p>With careful planning and smart choices, you can explore these destinations and more on a budget of under ₹20,000. Remember, the essence of travel lies in the experiences and memories, not in the amount spent. So, pack your bags, set a budget, and embark on a journey to discover the diverse beauty of India!</p>
    `,
  },
  {
    id: 5,
    title: "The Ultimate Guide to Ladakh: When to Go and What to See",
    date: "September 12, 2023",
    author: "Meera Reddy",
    category: "Destinations",
    tags: ["Ladakh", "Himalayas", "Travel", "Adventure", "Mountains"],
    image: "https://source.unsplash.com/random/1200x600/?Ladakh,mountains",
    description: "Everything you need to know about planning a trip to the breathtaking region of Ladakh.",
    content: `
      <p>Ladakh, often referred to as the "Land of High Passes," is a region in the northernmost part of India. Nestled between the Karakoram and Himalayan mountain ranges, Ladakh is known for its stunning landscapes, Buddhist monasteries, and unique culture. This guide will help you plan your trip to this breathtaking region.</p>
      
      <h2>Best Time to Visit Ladakh</h2>
      <p>Ladakh has a short tourist season due to its extreme weather conditions:</p>
      <ul>
        <li><strong>Summer (June to September)</strong>: This is the peak tourist season. The weather is pleasant, with temperatures ranging from 15°C to 30°C during the day. All roads are open, and most activities are available.</li>
        <li><strong>Winter (October to May)</strong>: Ladakh transforms into a winter wonderland, with temperatures dropping to as low as -30°C. Many roads are closed due to heavy snowfall, but it's a great time to spot snow leopards and experience the Chadar Trek (frozen river trek).</li>
      </ul>
      
      <h2>How to Reach Ladakh</h2>
      <p>There are two main ways to reach Ladakh:</p>
      <ul>
        <li><strong>By Air</strong>: The fastest way to reach Ladakh is by flying to Leh, the capital city. Regular flights operate from Delhi, Srinagar, and Jammu. The flight offers breathtaking views of the Himalayas.</li>
        <li><strong>By Road</strong>: There are two main routes to Ladakh:
          <ul>
            <li><strong>Manali-Leh Highway</strong>: This 473 km route passes through some of the highest motorable passes in the world, including Tanglang La (17,582 feet). The route is open from June to October.</li>
            <li><strong>Srinagar-Leh Highway</strong>: This 434 km route is less challenging and offers a gradual ascent, making it easier to acclimatize. The route is open from May to November.</li>
          </ul>
        </li>
      </ul>
      
      <h2>Acclimatization: A Crucial Step</h2>
      <p>Ladakh is at a high altitude, with Leh situated at 11,562 feet above sea level. Acclimatization is crucial to avoid Acute Mountain Sickness (AMS). Here are some tips:</p>
      <ul>
        <li>Rest for at least 24-48 hours upon arrival in Leh</li>
        <li>Stay hydrated by drinking plenty of water</li>
        <li>Avoid alcohol and smoking</li>
        <li>Eat light meals</li>
        <li>Gradually increase physical activity</li>
        <li>Consider taking Diamox (consult a doctor before taking any medication)</li>
      </ul>
      
      <h2>Top Places to Visit in Ladakh</h2>
      <p>Ladakh offers a plethora of attractions for every type of traveler:</p>
      
      <h3>1. Leh Palace</h3>
      <p>Built in the 17th century, Leh Palace is a nine-story structure that offers panoramic views of the city. The palace, modeled after the Potala Palace in Tibet, houses a museum with a collection of ancient artifacts.</p>
      
      <h3>2. Pangong Tso</h3>
      <p>This high-altitude lake, situated at 14,270 feet, is known for its changing colors and crystal-clear waters. The lake, which extends from India to China, gained popularity after being featured in the Bollywood movie "3 Idiots."</p>
      
      <h3>3. Nubra Valley</h3>
      <p>Often referred to as the "Valley of Flowers," Nubra Valley is known for its sand dunes, double-humped Bactrian camels, and the Diskit Monastery. The valley, situated at the confluence of the Shyok and Siachen rivers, offers a stark contrast to the barren landscapes of Ladakh.</p>
      
      <h3>4. Magnetic Hill</h3>
      <p>Located on the Leh-Kargil-Srinagar highway, Magnetic Hill is a gravity hill where vehicles appear to move uphill when in neutral. This optical illusion is a popular tourist attraction.</p>
      
      <h3>5. Hemis Monastery</h3>
      <p>The largest and wealthiest monastery in Ladakh, Hemis is known for its annual festival, which celebrates the birth of Guru Padmasambhava. The monastery houses a museum with a collection of ancient artifacts, including a copper statue of Buddha.</p>
      
      <h3>6. Tso Moriri</h3>
      <p>Less crowded than Pangong Tso, Tso Moriri is a high-altitude lake known for its pristine beauty and the surrounding wildlife, including the bar-headed geese and Tibetan wolves.</p>
      
      <h3>7. Khardung La</h3>
      <p>Often claimed to be the highest motorable pass in the world (though this is disputed), Khardung La offers breathtaking views of the surrounding mountains. The pass, situated at 17,582 feet, is the gateway to the Nubra and Shyok valleys.</p>
      
      <h3>8. Thiksey Monastery</h3>
      <p>Resembling the Potala Palace in Lhasa, Thiksey Monastery is a 12-story complex that houses a 15-meter-high statue of Maitreya Buddha. The monastery offers panoramic views of the Indus Valley.</p>
      
      <h3>9. Shanti Stupa</h3>
      <p>Built by Japanese Buddhists, Shanti Stupa is a white-domed structure that offers panoramic views of Leh and the surrounding mountains. The stupa, illuminated at night, contains relics of Buddha and is a symbol of the ties between the people of Japan and Ladakh.</p>
      
      <h3>10. Lamayuru Monastery</h3>
      <p>One of the oldest and largest monasteries in Ladakh, Lamayuru is known for its lunar-like landscape, often referred to as "Moonland." The monastery houses a rich collection of artifacts, wall paintings, and thangkas.</p>
      
      <h2>Adventure Activities in Ladakh</h2>
      <p>Ladakh is a paradise for adventure enthusiasts. Here are some activities you can indulge in:</p>
      <ul>
        <li><strong>Trekking</strong>: Ladakh offers numerous trekking routes, ranging from easy to challenging. The Markha Valley Trek, Chadar Trek, and Stok Kangri Trek are some popular options.</li>
        <li><strong>River Rafting</strong>: The Zanskar and Indus rivers offer excellent opportunities for white-water rafting, with rapids ranging from Grade I to Grade IV.</li>
        <li><strong>Mountain Biking</strong>: The challenging terrain and breathtaking landscapes make Ladakh a popular destination for mountain biking enthusiasts.</li>
        <li><strong>Camel Safari</strong>: Explore the sand dunes of Nubra Valley on the back of a double-humped Bactrian camel.</li>
        <li><strong>Motorcycle Tours</strong>: Riding a motorcycle through the high mountain passes of Ladakh is a dream for many adventure enthusiasts.</li>
      </ul>
      
      <h2>Local Cuisine</h2>
      <p>Ladakhi cuisine is influenced by Tibetan and Central Asian cuisines. Here are some must-try dishes:</p>
      <ul>
        <li><strong>Thukpa</strong>: A noodle soup with vegetables and meat.</li>
        <li><strong>Momos</strong>: Steamed dumplings filled with vegetables or meat.</li>
        <li><strong>Skyu</strong>: A pasta dish with vegetables and meat.</li>
        <li><strong>Butter Tea</strong>: A traditional drink made with tea leaves, butter, and salt.</li>
        <li><strong>Chang</strong>: A local beer made from fermented barley.</li>
      </ul>
      
      <h2>Practical Tips for Traveling to Ladakh</h2>
      <ul>
        <li>Carry warm clothes, even in summer, as temperatures can drop significantly at night.</li>
        <li>Carry a good quality sunscreen, sunglasses, and a hat to protect yourself from the strong UV rays at high altitudes.</li>
        <li>Carry a first-aid kit with basic medications, especially for altitude sickness.</li>
        <li>Respect local customs and traditions, especially when visiting monasteries.</li>
        <li>Carry enough cash, as ATMs are limited and may not always work due to connectivity issues.</li>
        <li>Stay hydrated and avoid alcohol during the first few days to help with acclimatization.</li>
        <li>Book accommodations in advance, especially during the peak season.</li>
      </ul>
      
      <p>Ladakh, with its breathtaking landscapes, rich culture, and adventure opportunities, offers a unique travel experience. Whether you're a nature lover, an adventure enthusiast, or a culture buff, Ladakh has something for everyone. So, plan your trip, pack your bags, and get ready to explore the "Land of High Passes."</p>
    `,
  },
  {
    id: 6,
    title: "Wildlife Tourism in India: Top National Parks and Sanctuaries",
    date: "October 8, 2023",
    author: "Arjun Kapoor",
    category: "Wildlife",
    tags: ["Wildlife", "National Parks", "Safari", "Tigers", "Conservation"],
    image: "https://source.unsplash.com/random/1200x600/?India,wildlife,tiger",
    description: "Explore India's rich biodiversity through its magnificent national parks and wildlife sanctuaries.",
    content: `
      <p>India, with its diverse ecosystems ranging from the snow-capped Himalayas to the tropical rainforests, is home to a rich variety of flora and fauna. The country's wildlife sanctuaries and national parks offer a glimpse into this biodiversity, making wildlife tourism a popular activity among nature enthusiasts and adventure seekers.</p>
      
      <h2>The Importance of Wildlife Tourism</h2>
      <p>Wildlife tourism, when done responsibly, plays a crucial role in conservation efforts. It generates revenue for the protection of endangered species and their habitats, creates awareness about conservation issues, and provides livelihood opportunities for local communities. However, it's essential to follow ethical practices to ensure that tourism doesn't harm the very wildlife it aims to protect.</p>
      
      <h2>Top National Parks and Wildlife Sanctuaries in India</h2>
      
      <h3>1. Jim Corbett National Park, Uttarakhand</h3>
      <p>Established in 1936, Jim Corbett is India's oldest national park. Named after the famous hunter-turned-conservationist Jim Corbett, the park is known for its Bengal tigers, Asian elephants, and over 600 species of birds. The park offers various safari options, including jeep safaris and elephant safaris, providing visitors with a chance to spot wildlife in their natural habitat.</p>
      
      <h3>2. Ranthambore National Park, Rajasthan</h3>
      <p>Once a hunting ground for the Maharajas of Jaipur, Ranthambore is now one of India's most famous tiger reserves. The park's landscape, dotted with ancient ruins, including the Ranthambore Fort, adds to its charm. Besides tigers, the park is home to leopards, sloth bears, and various species of deer.</p>
      
      <h3>3. Kaziranga National Park, Assam</h3>
      <p>A UNESCO World Heritage Site, Kaziranga is home to two-thirds of the world's one-horned rhinoceroses. The park's vast grasslands, marshes, and dense forests also shelter elephants, tigers, and numerous bird species. Elephant safaris are a popular way to explore the park, offering close encounters with rhinos and other wildlife.</p>
      
      <h3>4. Gir National Park, Gujarat</h3>
      <p>Gir is the last abode of the Asiatic lion, a subspecies that once roamed from the Middle East to India. The park's dry deciduous forests and savannah-like grasslands are also home to leopards, sambar deer, and over 300 species of birds. Jeep safaris are the primary mode of exploration, offering a chance to spot the majestic lions.</p>
      
      <h3>5. Bandhavgarh National Park, Madhya Pradesh</h3>
      <p>Known for having one of the highest densities of Bengal tigers in the world, Bandhavgarh is a paradise for wildlife photographers. The park's varied topography, including steep ridges, open meadows, and dense forests, supports a diverse range of wildlife, including leopards, sloth bears, and various species of deer.</p>
      
      <h3>6. Periyar Wildlife Sanctuary, Kerala</h3>
      <p>Centered around the Periyar Lake, this sanctuary offers a unique experience of exploring wildlife from a boat. The sanctuary is home to elephants, tigers, gaurs, and numerous bird species. The boat safaris on the lake provide a chance to spot animals coming to the water's edge to drink, especially during the dry season.</p>
      
      <h3>7. Sundarbans National Park, West Bengal</h3>
      <p>The Sundarbans, the largest mangrove forest in the world, is a UNESCO World Heritage Site known for its Bengal tigers that have adapted to living in the mangrove ecosystem. The park is also home to saltwater crocodiles, fishing cats, and various species of birds. Boat safaris are the only way to explore this unique ecosystem.</p>
      
      <h3>8. Kanha National Park, Madhya Pradesh</h3>
      <p>The inspiration behind Rudyard Kipling's "The Jungle Book," Kanha is known for its lush sal forests, grassy meadows, and ravines. The park is home to the rare hard-ground barasingha, along with tigers, leopards, and various species of deer. Jeep safaris are the primary mode of exploration, offering a chance to spot the elusive tigers.</p>
      
      <h3>9. Hemis National Park, Ladakh</h3>
      <p>Located in the high-altitude region of Ladakh, Hemis is known for its snow leopards, one of the most elusive big cats in the world. The park's rugged terrain, with elevations ranging from 3,000 to 6,000 meters, is also home to Tibetan wolves, Eurasian brown bears, and various species of mountain birds. Winter is the best time to spot snow leopards, as they descend to lower elevations in search of prey.</p>
      
      <h3>10. Great Himalayan National Park, Himachal Pradesh</h3>
      <p>A UNESCO World Heritage Site, the Great Himalayan National Park is known for its rich biodiversity, including rare and endangered species like the Western tragopan, Himalayan tahr, and snow leopard. The park's varied topography, ranging from alpine meadows to dense forests, supports a diverse range of flora and fauna. Trekking is the primary way to explore this pristine wilderness.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The best time to visit most national parks in India is during the dry season, from October to June, when animals gather around water sources, making them easier to spot. However, specific parks may have different optimal visiting times based on their location and the species you're interested in seeing. For instance, Hemis National Park in Ladakh is best visited in winter for snow leopard sightings.</p>
      
      <h2>Safari Options</h2>
      <p>Different parks offer different safari options:</p>
      <ul>
        <li><strong>Jeep Safaris</strong>: The most common way to explore national parks, offering mobility and comfort.</li>
        <li><strong>Elephant Safaris</strong>: Available in parks like Kaziranga and Jim Corbett, offering a unique perspective and the ability to navigate through dense vegetation.</li>
        <li><strong>Boat Safaris</strong>: Available in parks like Periyar and Sundarbans, offering a chance to spot wildlife from the water.</li>
        <li><strong>Walking Safaris</strong>: Available in select parks, offering a more immersive experience but requiring a higher level of fitness.</li>
      </ul>
      
      <h2>Responsible Wildlife Tourism</h2>
      <p>To ensure that your wildlife tourism experience is ethical and sustainable, follow these guidelines:</p>
      <ul>
        <li>Respect wildlife and their habitats by maintaining a safe distance and not disturbing them.</li>
        <li>Follow park rules and regulations, including speed limits and designated paths.</li>
        <li>Avoid using flash photography, which can disturb animals.</li>
        <li>Do not feed wildlife, as it can alter their natural behavior and diet.</li>
        <li>Dispose of waste responsibly to prevent pollution of natural habitats.</li>
        <li>Support local communities by staying in locally-owned accommodations and hiring local guides.</li>
        <li>Choose tour operators that follow ethical practices and contribute to conservation efforts.</li>
      </ul>
      
      <p>India's national parks and wildlife sanctuaries offer a glimpse into the country's rich biodiversity and provide a chance to witness wildlife in their natural habitat. By practicing responsible tourism, we can ensure that these natural treasures are preserved for future generations to enjoy.</p>
    `,
  },
]

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showShareOptions, setShowShareOptions] = useState(false)

  useEffect(() => {
    // Find the blog post with the matching ID
    const postId = Number.parseInt(id)
    const foundPost = blogPosts.find((post) => post.id === postId)

    if (foundPost) {
      setPost(foundPost)
      // Set page title
      document.title = `${foundPost.title} | ChaloGhumme Blog`
    } else {
      // If no post is found, navigate to the blog listing page
      navigate("/blog")
    }

    setIsLoading(false)

    // Scroll to top when post changes
    window.scrollTo(0, 0)
  }, [id, navigate])

  const handleShare = (platform) => {
    const url = window.location.href
    const title = post?.title || "ChaloGhumme Blog Post"

    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
        break
      default:
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }

    setShowShareOptions(false)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#be4f0a] border-t-transparent"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="mt-6 inline-block rounded-md bg-[#be4f0a] px-6 py-2 text-white hover:bg-[#a3450a]">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <motion.main
      className="min-h-screen py-8"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/blog" className="mb-6 inline-flex items-center text-[#666666] hover:text-[#be4f0a]">
          <ChevronLeft className="mr-1 h-5 w-5" /> Back to Blog
        </Link>

        <article className="mx-auto max-w-4xl">
          {/* Featured image */}
          <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
          </div>

          {/* Post header */}
          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl md:text-5xl">{post.title}</h1>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[#666666]">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4 text-[#be4f0a]" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4 text-[#be4f0a]" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="mr-1 h-4 w-4 text-[#be4f0a]" />
                {post.category}
              </div>
            </div>

            <p className="text-lg font-medium text-[#4d4d4d]">{post.description}</p>
          </header>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#1a1a1a] prose-p:text-[#4d4d4d] prose-a:text-[#be4f0a] prose-strong:text-[#1a1a1a]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="rounded-full bg-[#f2f2f2] px-3 py-1 text-sm text-[#666666]">
                #{tag}
              </span>
            ))}
          </div>

          {/* Share buttons */}
          <div className="mt-8 border-t border-b border-gray-200 py-6">
            <div className="relative flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Share this article</h3>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleShare("facebook")}
                  className="rounded-full bg-[#f2f2f2] p-2 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="rounded-full bg-[#f2f2f2] p-2 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="rounded-full bg-[#f2f2f2] p-2 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare("email")}
                  className="rounded-full bg-[#f2f2f2] p-2 text-[#666666] transition-colors hover:bg-[#be4f0a] hover:text-white"
                  aria-label="Share via Email"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Related posts section could be added here */}
        </article>
      </div>
    </motion.main>
  )
}
