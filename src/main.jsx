import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import image from "../public/boy.jpg";
import image2 from "../public/girl.jpg";
const heading = [
  {
    name: "Incomplete",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
  {
    name: "To Do",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
  {
    name: "Doing",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
  {
    name: "Under Review",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
  {
    name: "Completed",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
  {
    name: "OverDated",
    count: 0,
    children: [
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
      {
        client_name: "Client Name",
        client_img: image,
        client_name2: "Shakil Khan",
        client_img2: image2,
        paragrap:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laborum aliquam dolores tenetur amet laudantium reiciendis repellat perferendis, corporis dolorem recusandae dolor inventore, similique labore eos ducimus quia beatae.Eum assumenda aliquid soluta fuga corporis. Amet est, porro eveniet odio quidem laborum dolores veniam et voluptatibus! Cupiditate perspiciatis facere consequuntur iure fuga nisi quos quae. Quae enim consequuntur dolores?",
        viewer_img: image,
        viewer_img2: image2,
        count_like: 12,
        count_comment: 15,
        count_attachment: 25,
        date: "30/12/2022",
      },
    ],
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App heading={heading}></App>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
