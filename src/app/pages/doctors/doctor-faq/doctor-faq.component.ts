import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctor-faq",
  templateUrl: "./doctor-faq.component.html",
  styleUrls: ["./doctor-faq.component.scss"],
})
export class DoctorFaqComponent implements OnInit {
  public faqs: any[] = [
    {
      id: 1,
      question: "Who is a neurosurgeon?",
      answer:
        "A neurosurgeon is a doctor with a specialization in diagnosis and treatment of brain, spinal cord and nerve-related diseases.",
    },
    {
      id: 2,
      question: "Can a neurosurgeon operate a brain tumour?",
      answer:
        "Yes, a neurosurgeon can operate and remove brain tumours by a procedure called as craniotomy.",
    },
    {
      id: 3,
      question: "Does a neurosurgeon only perform surgery?",
      answer:
        "Neurosurgeons are trained to perform complex surgeries, but when possible, they try to treat the condition with medicines alone. When medicines fail to give relief, neurosurgeons opt for a surgery to provide relief.",
    },
    {
      id: 4,
      question: "Can a neurosurgeon operate a brain tumour?",
      answer:
        "One can see a neurosurgeon if you have any symptoms like birth-defects, trauma to brain or spine due to some shock or accident, brain tumours, vascular disorders, infections in the brain or spine, stroke, or degenerative diseases of the spine like multiple sclerosis.",
    },
    {
      id: 5,
      question: "Can a neurologist treat birth defects in nervous system?",
      answer:
        "No, a neurologist cannot treat birth-defects in the nervous system, but a neurosurgeon can operate on such defects present since birth in the brain and spinal cord in infants and children.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
