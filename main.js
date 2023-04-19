import { drawArcs } from "./modules/draw.js";

const canvas = document.getElementById("myCanvas");
canvas.width = 150;
canvas.height = 150;

const ctx = canvas.getContext("2d");

drawArcs(ctx);