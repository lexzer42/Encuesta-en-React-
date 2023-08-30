"use client";

import { useState } from "react";
import data from "../data.json";

interface Question {
  id: number;
  texto: string;
}

interface Answer extends Question {
  valoracion: 1 | 2 | 3 | 4 | 5;
}

const questions: Question[] = data.preguntas;

function Rating({
  value,
  onChange,
  isReadOnly,
}:
  | {
      value: Answer["valoracion"];
      onChange: (value: Answer["valoracion"]) => void;
      isReadOnly?: never;
    }
  | {
      value: Answer["valoracion"];
      isReadOnly: boolean;
      onChange?: never;
    }) {
  const [hoverValue, setHoverValue] = useState<Answer["valoracion"] | null>(null);

  return (
    <div className={`text-2xl ${hoverValue ? "text-yellow-300" : "text-yellow-500"}`} onMouseLeave={() => setHoverValue(null)}>
      {"★"
        .repeat(hoverValue || value)
        .padEnd(5, "☆")
        .split("")
        .map((elem, index) => (
          <span
            className={!isReadOnly ? "cursor-pointer" : undefined}
            onClick={() =>
              !isReadOnly && onChange?.((index + 1) as Answer["valoracion"])
            }
            onMouseOver={() =>
              !isReadOnly && setHoverValue((index + 1) as Answer["valoracion"])
            }
            key={index}>
            {elem}
          </span>
        ))}
    </div>
  );
}

export default function Home() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = questions[answers.length];

  function handleRate(rating: Answer["valoracion"]) {
    setAnswers((answers) =>
      answers.concat({
        ...currentQuestion,
        valoracion: rating,
      })
    );
  }

  if (!currentQuestion) {
    return (
      <ul className="border rounded-md">
        {answers.map((answer) => (
          <li className="flex items-center justify-between p-2"key={answer.id}>
            {answer.texto} <Rating isReadOnly value={answer.valoracion} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-xl">{currentQuestion.texto}</h1>
      <Rating value={1} onChange={handleRate} />
    </div>
  );
}
