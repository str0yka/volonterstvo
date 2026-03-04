"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import { QUIZ_RESULT_LEVELS } from "@/data/quizResultsConfig";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => QUIZ_QUESTIONS.map(() => null),
  );
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const currentAnswer = answers[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers(QUIZ_QUESTIONS.map(() => null));
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const { totalScore, maxScore, resultLevel } = useMemo(() => {
    const scorePerAnswer = answers.reduce<number>(
      (acc, answer) => {
        if (answer == null) return acc;
        // A = 1, B = 2, C = 3, D = 4
        return acc + (answer + 1);
      },
      0,
    );

    const theoreticalMaxScore = totalQuestions * 4; // D = 4 балла

    const level =
      QUIZ_RESULT_LEVELS.find(
        (item) =>
          scorePerAnswer >= item.minScore && scorePerAnswer <= item.maxScore,
      ) ?? QUIZ_RESULT_LEVELS[0];

    return {
      totalScore: scorePerAnswer,
      maxScore: theoreticalMaxScore,
      resultLevel: level,
    };
  }, [answers, totalQuestions]);

  return (
    <div className="min-h-screen bg-[#f3f8f4] text-slate-900">
      <header className="border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-sm">
              ЭК
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                ЭКОКОННТЕКТ 4.0
              </span>
              <span className="text-xs text-slate-500">
                Экологичная викторина
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            ← На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10 pb-20">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-emerald-950">
            Викторина по экопривычкам
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Ответьте на вопросы, чтобы узнать, на каком этапе экологичного пути
            вы сейчас находитесь. В конце вы увидите количество набранных
            баллов, уровень и краткую интерпретацию.
          </p>
        </section>

        {!isFinished ? (
          <section className="space-y-6 rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
                  Вопрос {currentIndex + 1} из {totalQuestions}
                </span>
                <h2 className="text-base font-semibold text-emerald-950">
                  {currentQuestion.question}
                </h2>
              </div>
              <div className="hidden text-right text-xs text-slate-500 sm:block">
                <p>
                  Вы можете вернуться к предыдущим вопросам и изменить свой
                  ответ.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = currentAnswer === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectOption(index)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${isSelected
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950 shadow-sm"
                      : "border-emerald-100 bg-emerald-50/40 text-slate-800 hover:border-emerald-300 hover:bg-emerald-50"
                      }`}
                  >
                    <span>{option}</span>
                    <span
                      className={`ml-3 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${isSelected
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-400"
                        }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 disabled:opacity-40"
                >
                  ← Назад
                </button>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentAnswer === null}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
              >
                {currentIndex === totalQuestions - 1
                  ? "Завершить викторину"
                  : "Подтвердить ответ →"}
              </button>
            </div>
          </section>
        ) : (
          <section className="space-y-6 rounded-3xl border border-emerald-100 bg-white/90 p-6 text-sm shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-semibold text-emerald-950">
                  Ваш результат
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  На основе суммы набранных баллов мы определили ваш текущий
                  уровень экологичного пути.
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-medium text-emerald-700">
                  {resultLevel.label}
                </span>
                <span className="text-lg font-semibold text-emerald-900">
                  {totalScore} из {maxScore} баллов
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50/80 px-4 py-3 text-xs text-slate-700">
              {resultLevel.description && (
                <p className="mt-1">{resultLevel.description}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500">
              <p>
                Вы можете пройти викторину ещё раз или вернуться на главную
                страницу, чтобы продолжить знакомство с проектом.
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Пройти ещё раз
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  На главную
                </Link>
              </div>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl border border-dashed border-emerald-100 bg-emerald-50/60 px-4 py-3 text-xs text-slate-700">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium text-emerald-950">
                  Как распределяется осведомлённость в среднем по населению
                  (по данным различных опросов и исследований)?
                </p>
                <p className="text-[11px] text-emerald-900/80">
                  Диаграмма носит ориентировочный характер.
                </p>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-emerald-900">
                      🌱 Первичные знания / низкая осведомлённость
                    </span>
                    <span className="text-[11px] text-emerald-900/80">
                      12%
                    </span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[13%] rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Мало понимают экологические темы, редко действуют.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-emerald-900">
                      🌿 Средний уровень осведомлённости
                    </span>
                    <span className="text-[11px] text-emerald-900/80">
                      69%
                    </span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[71%] rounded-full bg-emerald-600" />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Люди, которые слышали об экопросвете и иногда внедряют
                    простые экопривычки.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-emerald-900">
                      🌍 Высокий уровень практической осведомлённости
                    </span>
                    <span className="text-[11px] text-emerald-900/80">
                      11%
                    </span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[12%] rounded-full bg-emerald-700" />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Регулярно сортируют отходы, экономят ресурсы и участвуют в
                    инициативах.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-emerald-900">
                      ♻ Очень высокий / активный экологичный образ жизни
                    </span>
                    <span className="text-[11px] text-emerald-900/80">
                      8%
                    </span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[9%] rounded-full bg-emerald-800" />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Активно действуют: волонтёрят, глубоко разбираются в темах,
                    помогают другим войти в экологичный образ жизни.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

