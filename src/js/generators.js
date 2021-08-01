export const generators = [
    //tier 1
    {
        name: "Triangle",
        baseRps: 0.2, //150s
        basePrice: [30,0,0],
        price: [30,0,0],
        count: 0,
        vertices: 3,
        image: "/assets/generators/triangle.png",
        imageAnim: "/assets/generators/triangle-anim.gif"
    },
    {
        name: "Square",
        baseRps: 1, //200s
        basePrice: [200,0,0],
        price: [200,0,0],
        count: 0,
        vertices: 4,
        image: "/assets/generators/square.png",
        imageAnim: "/assets/generators/square-anim.gif"
    },
    {
        name: "Pentagon",
        baseRps: 3, //256s
        basePrice: [0,3,0],
        price: [0,3,0],
        count: 0,
        vertices: 5,
        image: "/assets/generators/pentagon.png",
        imageAnim: "/assets/generators/pentagon-anim.gif"
    },
    {
        name: "Hexagon",
        baseRps: 15, //307.2s
        basePrice: [0,18,0],
        price: [0,18,0],
        count: 0,
        vertices: 6,
        image: "/assets/generators/hexagon.png",
        imageAnim: "/assets/generators/hexagon-anim.gif"
    },
    {
        name: "Septagon",
        baseRps: 50, //409.6s
        basePrice: [0,80,0],
        price: [0,80,0],
        count: 0,
        vertices: 7,
        image: "/assets/generators/septagon.png",
        imageAnim: "/assets/generators/septagon-anim.gif"
    },
    {
        name: "Octagon",
        baseRps: 125, //524.288s
        basePrice: [0,0,1],
        price: [0,0,1],
        count: 0,
        vertices: 8,
        image: "/assets/generators/octagon.png",
        imageAnim: "/assets/generators/octagon-anim.gif"
    },

    //tier 2
    {
        name: "Pyramid",
        baseRps: 750, //436.9s
        basePrice: [0,0,5],
        price: [0,0,5],
        count: 0,
        vertices: 5,
        image: "",
        imageAnim: ""
    },
    {
        name: "Cube",
        baseRps: 3000, //524.288s
        basePrice: [0,0,24],
        price: [0,0,24],
        count: 0,
        vertices: 8,
        image: "",
        imageAnim: ""
    },
    {
        name: "Dodecahedron",
        baseRps: 12000, //546.13s
        basePrice: [0,0,100],
        price: [0,0,100],
        count: 0,
        vertices: 20,
        image: "",
        imageAnim: ""
    },
]

export const levelThresholds = [
    {
        threshold: 10,
        bonus: 1.1
    },
    {
        threshold: 25,
        bonus: 1.2
    },
    {
        threshold: 50,
        bonus: 1.25
    },
    {
        threshold: 75,
        bonus: 1.1
    },
    {
        threshold: 100,
        bonus: 1.5
    },
    {
        threshold: 150,
        bonus: 1.2
    },
    {
        threshold: 200,
        bonus: 1.5
    },
    {
        threshold: 250,
        bonus: 1.2
    },
    {
        threshold: 300,
        bonus: 1.25
    },
    {
        threshold: 400,
        bonus: 1.25
    },
    {
        threshold: 500,
        bonus: 1.25
    },
]