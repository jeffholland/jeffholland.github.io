import { drawColoredGrid } from "./modules/draw.js";

const canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 600;

const ctx = canvas.getContext("2d");

drawColoredGrid(ctx);