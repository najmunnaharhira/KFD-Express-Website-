import basket_icon from './basket_icon.png'
import logo from './logo.png.jpg'
import search_icon from './search_icon.png'
import exploreMenuImg from './explore-menu.jpg'
import menuScanner from './menu-scanner.jpg'
import kfdDumpling from './kfd-dumpling.png'
import beefDumpling from './beef-dumplings.png'
import chickenChow from './chicken-chow.png'
import chowmein from './chowmein.png'
import riceMeatball from './rice-meatball.png'
import feelGood from './feel-good.png'
import legDay from './leg-day.png'
import sealDeal from './seal-deal.png'
import pickBest from './pick-best.png'
import heroImage from './hero.jpg'
import chilekothaLogo from './chilekotha-logo.png'
import studentOffer from './student-offer.png'
import discount20 from './discount-20.jpg'
import bestDumplings from './best-dumplings.jpg'
import frozenDumplings from './frozen-dumplings.jpg'
import dumplingsDiscount from './dumplings-discount.jpg'
import fridayDiscount from './friday-discount.jpg'
import studentDiscount from './student-discount.jpg'
import freeDelivery from './free-delivery.jpg'
import foodi from './foodi.jpg'
import foodpanda from './foodpanda.jpg'
import celebration from './celebration.jpg'
import platterSet from './platter-set.jpg'
import returnCustomer from './return-customer.jpg'
import welcomePost from './welcome-post.jpg'
import exsteamly from './exsteamly.png'
import fried from './fried.jpg'
import kfdLogo from './KFD.png'
import kfdDrool from './kfd-drool.png'
import kfdHalloween from './kfd-halloween.png'
import zuiHao from './zui-hao.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import facebook_icon from './facebook_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

const foodImages = [kfdDumpling, beefDumpling, chickenChow, chowmein, riceMeatball, feelGood, legDay, sealDeal, pickBest];

export const galleryImages = [
  studentOffer, discount20, bestDumplings, frozenDumplings, dumplingsDiscount,
  fridayDiscount, studentDiscount, freeDelivery, foodi, foodpanda, celebration,
  platterSet, returnCustomer, welcomePost, exsteamly, fried, kfdLogo, kfdDrool,
  kfdHalloween, zuiHao, kfdDumpling, beefDumpling, chickenChow, chowmein,
  riceMeatball, feelGood, legDay, sealDeal, pickBest, exploreMenuImg, menuScanner
];

export const assets = {
    logo,
    basket_icon,
    header_img: heroImage,
    menuScanner,
    chilekothaLogo,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    facebook_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    { menu_name: "Dumplings", menu_image: exploreMenuImg },
    { menu_name: "Fried Items", menu_image: exploreMenuImg }
]

export const food_list = [
    /* Dumplings */
    { _id: "1", name: "Chicken Leg Mushroom", image: foodImages[0], price: 340, description: "10Pcs Boiled 340Tk | 10Pcs Fried 395Tk", category: "Dumplings" },
    { _id: "2", name: "Chicken Curry Onion", image: foodImages[0], price: 340, description: "10Pcs Boiled 340Tk | 10Pcs Fried 395Tk", category: "Dumplings" },
    { _id: "3", name: "Beef Onion", image: foodImages[1], price: 420, description: "10Pcs Boiled 420Tk | 10Pcs Fried 450Tk", category: "Dumplings" },
    { _id: "4", name: "Fish Onion", image: foodImages[0], price: 375, description: "10Pcs Boiled 375Tk | 10Pcs Fried 410Tk", category: "Dumplings" },
    { _id: "5", name: "Chicken Wonton", image: foodImages[0], price: 430, description: "10pcs 430Tk", category: "Dumplings" },
    { _id: "6", name: "Chicken Soup", image: foodImages[5], price: 165, description: "1pr 165Tk", category: "Dumplings" },
    /* Fried Items */
    { _id: "7", name: "Vegetable Soup", image: foodImages[5], price: 135, description: "1pr 135Tk", category: "Fried Items" },
    { _id: "8", name: "Sticky Fried Rice", image: foodImages[4], price: 340, description: "1pr 340Tk", category: "Fried Items" },
    { _id: "9", name: "Express Chowmein", image: foodImages[3], price: 320, description: "1pr 320Tk", category: "Fried Items" },
    { _id: "10", name: "Cheese Rice with Chicken Meat Balls", image: foodImages[4], price: 430, description: "1pr 430Tk", category: "Fried Items" },
    { _id: "11", name: "Cold Mushroom", image: foodImages[5], price: 210, description: "1pr 210Tk", category: "Fried Items" },
    { _id: "12", name: "Sea-Weed", image: foodImages[5], price: 200, description: "1pr 200Tk", category: "Fried Items" },
    { _id: "13", name: "Chicken Wing", image: foodImages[6], price: 170, description: "2pcs 170Tk", category: "Fried Items" },
    { _id: "14", name: "Chicken Leg", image: foodImages[6], price: 180, description: "1pcs 180Tk", category: "Fried Items" },
    { _id: "15", name: "Chicken Braised Leg", image: foodImages[6], price: 275, description: "1pc 275Tk", category: "Fried Items" },
    { _id: "16", name: "Chicken Breast", image: foodImages[6], price: 265, description: "6pcs 265Tk", category: "Fried Items" },
    { _id: "17", name: "Chicken Meat Ball", image: foodImages[4], price: 240, description: "10pcs 240Tk", category: "Fried Items" },
    { _id: "18", name: "French Fries", image: foodImages[7], price: 210, description: "1pr 210Tk", category: "Fried Items" },
    { _id: "19", name: "Fried Calamari With French Fries", image: foodImages[7], price: 285, description: "1pr 285Tk", category: "Fried Items" },
    { _id: "20", name: "Chicken Lollypop", image: foodImages[6], price: 275, description: "4pcs 275Tk", category: "Fried Items" },
    { _id: "21", name: "Braised Tofu", image: foodImages[8], price: 210, description: "6pc 210Tk", category: "Fried Items" },
    { _id: "22", name: "Express Chili Chicken", image: foodImages[2], price: 300, description: "1pr 300Tk", category: "Fried Items" },
    { _id: "23", name: "KFD Thai Soup", image: foodImages[5], price: 210, description: "1pr 210Tk", category: "Fried Items" },
    { _id: "24", name: "Fried Wonton", image: foodImages[0], price: 220, description: "6pcs 220Tk", category: "Fried Items" },
    { _id: "25", name: "KFD TOFU Chowmein", image: foodImages[3], price: 275, description: "1pr 275Tk", category: "Fried Items" },
    { _id: "26", name: "Pan Fried Tofu", image: foodImages[8], price: 210, description: "10pcs 210Tk", category: "Fried Items" },
    { _id: "27", name: "KFD Mixed Fried Rice", image: foodImages[4], price: 320, description: "1pr 320Tk", category: "Fried Items" },
    { _id: "28", name: "KFD Egg Fried Rice", image: foodImages[4], price: 295, description: "1pr 295Tk", category: "Fried Items" },
    { _id: "29", name: "KFD Chinese Vegetable", image: foodImages[8], price: 210, description: "1pr 210Tk", category: "Fried Items" },
    { _id: "30", name: "Sweet & Sour Meatball", image: foodImages[4], price: 265, description: "1pr 265Tk", category: "Fried Items" }
]
