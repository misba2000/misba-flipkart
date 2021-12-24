

import BreakBad from "./BreakBad";
import TopBar from "./TopBar";
import SlidingBar from "./SlidingBar"
import Deals from "./Deals"
import FeedList from "./FeedList"
import ScFeedList from "./ScFeedList";
import Trending from "./Trending";
import "./BreakBadModule.css"

import './App.css';

function App() {
  
  return (
    <div className="App" >
     <BreakBad /> 
    <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" name="Topoffers"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" name="Mobiles"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" name="Grocery"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" name="Fashion"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" name="Electronics"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" name="Home"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" name="Apliances"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" name="Travel"/>
     <TopBar image="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" name="Beauty&Toys"/> 
    <SlidingBar />
    
    <div><Deals /></div>
       
        <div>
         
     <FeedList image="https://rukminim1.flixcart.com/flap/150/150/image/89469ea02a6cef9b.jpg?q=70" name={<b>
       Plain Mobile Covers </b>}  amount="Just rupees 179 " text="For all top models"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/kll7bm80/kurta/g/n/q/s-20few12216-112785-w-original-imagynx7pchz6sxw.jpeg?q=70"  name={<b>Trendy kurtas and kurtis</b>} amount="From rupees 199" text="Libas, mokshi & more"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/krz97rk0/watch/k/h/y/a1611-casio-original-imag5n4mp4fwkfbq.jpeg?q=70"  name={<b>Casio, Fastrack, Sonato...</b>} amount="Upto 80%+Extra 10%Off " text="Selling Fast!Grab Now!"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/kj8wccw0-0/t-shirt/f/v/c/m-m7aw20cn012a-m7-by-metronaut-original-imafyuywkdh6evxh.jpeg?q=70"  name={<b>Best of Brands</b>} amount="From rupees 299 " text="Mens clothing"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/j3j1le80/electric-ride-on/p/z/s/thro382r-toy-house-original-imaeuny9hk8qasg4.jpeg?q=70"  name={<b>Remote control, Board G..</b>} amount="Upto 70% Off " text="Hot Wheeels"/>
     <FeedList image="https://rukminim1.flixcart.com/flap/150/150/image/fd7a72e3b9d9a6e8.jpg?q=70"  name={<b>Kids winter wear</b>} amount="Min 50% Off " text="Nick and Jones"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/khnqqa80/hair-oil/7/c/h/490-jasmine-coconut-hair-oil-parachute-advansed-original-imafxmbuvdekyurp.jpeg?q=70"  name={<b>Home Improvement range</b>} amount="From rupees 299 " text="Hillgrove and more"/>
     <FeedList image="https://rukminim1.flixcart.com/image/150/150/kn7sdjk0/sticker/3/b/7/large-wall-stickers-wallpaper-happy-winter-trees-and-frames-home-original-imagfxzhwqqkzss2.jpeg?q=70" name={<b>Best of Home Decor</b>}amount="From rupees 79 " text="Lowest price ever"/>
     </div> 
     <div>
       <Trending />
     </div>
       <div>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/1/z/5/cs-noise-colorfit-pro-3-vprime-original-imag6hkzehb4jysy.jpeg?q=70" name={<b>Smart Watch Screenguard..</b>} amount="Extra 20% Off"  text="Shop Now!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/ksc46fk0/fabric/v/m/j/no-2-35-m-unstitched-shankar01-trijal-fab-original-imag5xd6gfptxtqp.jpeg?q=70" name={<b>Men's Shirt and Trouser F..</b>} amount="Top Picks"  text="Explore Now!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/jubjte80/watch/z/n/w/new-arrival-stylish-attractive-ethnic-blue-bracelet-look-analog-original-imaffg3vhgq6zsej.jpeg?q=70" name={<b>Wrist Watches</b>} amount="Extra 20%Off"  text="Grab Now!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/k7qinbk0/headphone/y/g/g/fd1-s-s-l21-wireless-bluetooth-headphone-waterproof-stereo-original-imafpwpajf9g25wg.jpeg?q=70" name={<b>Headphones</b>} amount="Extra 5% Off"  text="Hurry,Don't Miss Out!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/klfhk7k0/sari/w/x/h/free-rebit-lichi-toriox-semi-stitched-original-imagyjvgnzhumpju.jpeg?q=70" name={<b>Women's Sarees</b>} amount="Top Picks"  text="Hurry,Don't miss out!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/kajywsw0/kids-track-pant/z/m/s/3-4-years-kucpaj118-kuchipoo-original-imafs2vjannrn8yn.jpeg?q=70" name={<b>Kid's track pants</b>} amount="Top picks"  text="Buy Now!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/wallet-card-wallet/t/u/c/sam-17-brw-pln-alb-samtroh-original-imafgf56fvf6aybb.jpeg?q=70" name={<b>Wallets</b>} amount="Extra 12% off"  text="Grab Now!"/>
         <ScFeedList image="https://rukminim1.flixcart.com/image/150/150/k6mibgw0/kids-dress/d/5/4/10-11-years-blueribjacket-ftc-fashions-original-imafz5g6mffxnkd9.jpeg?q=70" name={<b>Kid's Dresses</b>} amount="Top picks"  text="Explore Now!"/>
       </div>
       
    </div>
  
);
}


export default App;
