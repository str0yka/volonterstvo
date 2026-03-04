"use client";

import { useEffect, useState } from "react";

type Gratitude = {
  from: string;
  text: string;
};

const MOCK_GRATITUDES: Gratitude[] = [
  {
    from: "Участница Анастасия",
    text: "ЭКОКОННТЕКТ 4.0 помог мне найти сообщество людей, которые так же заботятся о городе. Очень поддерживающая атмосфера и понятные шаги, с чего начать.",
  },
  {
    from: "Команда партнёров",
    text: "Благодаря совместным акциям по раздельному сбору мы познакомились с активными жителями района и смогли запустить постоянный пункт приёма вторсырья.",
  },
  {
    from: "Волонтёр Илья",
    text: "После участия в проекте я стал внимательнее относиться к ресурсам и подключил друзей к сортировке мусора. Спасибо за простой и вдохновляющий формат.",
  },
];

export default function GratitudeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const totalSlides = MOCK_GRATITUDES.length + 1; // +1 для слайда-кнопки

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    // Здесь можно будет добавить отправку на сервер/в базу.
    setIsModalOpen(false);
    setFrom("");
    setText("");
    setIsToastVisible(true);
  };

  useEffect(() => {
    if (!isToastVisible) return;
    const timer = setTimeout(() => setIsToastVisible(false), 3200);
    return () => clearTimeout(timer);
  }, [isToastVisible]);

  const isFirstSlide = currentIndex === 0;
  const currentGratitude = !isFirstSlide
    ? MOCK_GRATITUDES[currentIndex - 1]
    : null;

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-1 w-10 rounded-full bg-emerald-500" />
          <span>
            Слайд {currentIndex + 1} из {totalSlides}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 bg-white text-sm text-emerald-700 shadow-sm transition hover:bg-emerald-50"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 bg-white text-sm text-emerald-700 shadow-sm transition hover:bg-emerald-50"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden">
        <div className="flex transition-transform duration-300">
          {/* Один "логический" слайд, показываем по индексу */}
          <div className="w-full shrink-0">
            {isFirstSlide ? (
              <button
                type="button"
                onClick={openModal}
                className="flex h-52 w-full flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-[#f2e4d3]/60 text-center shadow-sm transition hover:border-emerald-400 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-xl font-semibold text-white shadow-sm">
                  +
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-emerald-950">
                    Оставить благодарность
                  </p>
                  <p className="px-6 text-xs text-slate-600">
                    Поделитесь, как проект повлиял на вас, вашу команду или
                    район. Текст попадёт к модератору и может быть опубликован
                    в этом разделе.
                  </p>
                </div>
              </button>
            ) : (
              <article className="flex h-52 w-full flex-col justify-between rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-slate-700">
                  {currentGratitude?.text}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-900">
                    {currentGratitude?.from}
                  </span>
                  <span className="rounded-full bg-[#f2e4d3] px-3 py-1 text-[11px] font-medium text-emerald-950">
                    благодарность
                  </span>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/35 px-4 backdrop-blur-sm">
          <div className="max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <h3 className="text-base font-semibold text-emerald-950">
              Оставить благодарность
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Укажите, от кого благодарность, и опишите свой опыт участия в
              проекте.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  От кого
                </label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Например: Участница Анна / Команда школьного проекта"
                  className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-3 py-2 text-sm text-emerald-950 outline-none ring-0 transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Текст благодарности
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  placeholder="Опишите, за что вы хотите поблагодарить команду или участников проекта."
                  className="w-full resize-none rounded-xl border border-emerald-100 bg-emerald-50/40 px-3 py-2 text-sm text-emerald-950 outline-none ring-0 transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Отправить благодарность
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Тост */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center transition-all duration-300 ${
          isToastVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-auto flex max-w-md items-center gap-3 rounded-full bg-emerald-900 px-4 py-2 text-xs text-emerald-50 shadow-lg shadow-emerald-900/40">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-semibold text-white">
            ✓
          </span>
          <p>Благодарность отправлена на модерацию.</p>
        </div>
      </div>
    </div>
  );
}

