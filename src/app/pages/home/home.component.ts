import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  blogs: any[] = [
    {
      title: "Effect of dead skin on health",
      author: "Dr. Berk Deres (MBBS, MRPS, SKin Specialist)",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud",
      img: "blog1",
      likes: 373,
    },
    {
      title: "Are drugs the best solution?",
      author: "Dr. Ashley Willson (Dental Surgeon)",
      description:
        "Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet,",
      img: "blog2",
      likes: 128,
    },
    {
      title: "2015 Best USA Hospitals and Clinics",
      author: "Dr. George Button (General Doctor)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "blog3",
      likes: 496,
    },
  ];

  public doctorsList: Array<any> = [
    {
      img: "../../../assets/images/doctors/1.jpg",
      title: "Neurosurgeon",
      name: "Collis Molate",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "../../../assets/images/doctors/2.jpg",
      title: "Neurosurgeon",
      name: "Domani Plavon",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/3.jpg",
      title: "Dental Surgeon",
      name: "John Mard",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/4.jpg",
      title: "Gynocologist",
      name: "Amanal Frond",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/5.jpg",
      title: "Neurosurgeon",
      name: "Dr. Addition Smith",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/6.jpg",
      title: "Dental Surgeon",
      name: "Dr. Louis Morris",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
  ];

  testimonials: Array<any> = [
    {
      img: "../../../assets/images/doctors/1.jpg",
      name: "Daniel Alberto",
      title: "CEO",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam.",
    },
    {
      img: "../../../assets/images/doctors/2.jpg",
      name: "Daniel Alberto",
      title: "CEO",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam.",
    },
    {
      img: "../../../assets/images/doctors/3.jpg",
      name: "Daniel Alberto",
      title: "CEO",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam.",
    },
    {
      img: "../../../assets/images/doctors/4.jpg",
      name: "Daniel Alberto",
      title: "CEO",
      description:
        "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam.",
    },
  ];

  public doctors_config = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    slide: 1,
    speed: 400,
    interval: { timing: 1000 },
    point: {
      visible: true,
    },
    load: 2,
    touch: true,
    loop: true,
  };

  public testimonials_config = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: { timing: 1000 },
    point: {
      visible: true,
    },
    load: 2,
    touch: true,
    loop: true,
  };

  promotions: any[] = [
    {
      title: 'Free',
      img: '../../../assets/images/promotions/1.jpg',
      description: 'Home sampling, collection, Diagnostic tests'
    },
    {
      title: 'Free',
      img: '../../../assets/images/promotions/2.jpg',
      description: '20% flat discount on entire medicine'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
 
}
