import Link from "next/link";
import GratitudeSection from "@/components/GratitudeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f8f4] text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-8 pb-20 sm:px-6 sm:py-10 md:gap-20 md:py-16">
        {/* Hero */}
        <section className="grid gap-8 rounded-3xl bg-linear-to-br from-emerald-50 via-emerald-100/70 to-[#f2e4d3] p-5 shadow-sm sm:p-7 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:p-10">
          <div className="flex flex-col justify-center gap-5">
            <span className="inline-flex w-fit rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.22em]">
              Волонтёрство / Экология
            </span>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl md:text-5xl">
              ЭКОКОННТЕКТ 4.0
            </h1>
            <p className="text-balance text-base leading-relaxed text-emerald-950/80 sm:text-lg">
              Мы уже четвёртый год объединяем родителей, детей и педагогов вокруг идеи экологичного и осознанного будущего.
              Помогаем взрослым просто и уверенно говорить с детьми о заботе о природе, формировать полезные экопривычки и вовлекать семьи в реальные волонтёрские дела.
              ЭкоКоннект 4.0 — это живое сообщество, где ценности превращаются в действия, а маленькие шаги сегодня создают большое и устойчивое завтра. 🌿
            </p>

            <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50"
              >
                Пройти викторину
              </Link>
              <div className="flex flex-col gap-1 text-sm text-emerald-950/85 sm:flex-row sm:items-center sm:gap-4">
                <p className="text-xs text-emerald-950/70 sm:text-sm">
                  Викторину уже прошли{" "}
                  <span className="font-semibold">294 человека</span>, сайт
                  посетили <span className="font-semibold">2374 человека</span>.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Наши ценности */}
        <section id="values" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Наши ценности
              </h2>
              <p className="mt-1 max-w-xl text-base text-slate-600 sm:text-lg">
                Опоры, вокруг которых строится наша работа и взаимодействие с
                волонтёрами, партнёрами и местными сообществами.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm">
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Осознанность
              </span>
              <h3 className="text-sm font-semibold text-emerald-950">
                Забота о природе каждый день
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Мы верим, что экологичное мышление начинается с простых
                ежедневных решений: сортировать отходы, снижать потребление,
                делиться вещами и знаниями.
              </p>
            </article>

            <article className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm">
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Сообщество
              </span>
              <h3 className="text-sm font-semibold text-emerald-950">
                Люди важнее форматов
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                ЭКОКОННТЕКТ 4.0 объединяет людей с разным опытом, но общей
                ценностью — желанием менять город и окружающую среду к лучшему.
              </p>
            </article>

            <article className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm">
              <span className="inline-flex w-fit rounded-full bg-[#f2e4d3] px-3 py-1 text-xs font-semibold text-emerald-900">
                Ответственность
              </span>
              <h3 className="text-sm font-semibold text-emerald-950">
                Действовать, а не просто знать
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Мы поддерживаем волонтёров знаниями, практиками и инструментами,
                чтобы экологические инициативы превращались в устойчивые
                привычки.
              </p>
            </article>
          </div>
        </section>

        {/* Путь экочеловека */}
        <section id="path" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Путь экочеловека
              </h2>
              <p className="mt-1 max-w-xl text-base text-slate-600 sm:text-lg">
                Примерная траектория, по которой проходит участник, вовлекаясь в
                экологичные практики и волонтёрские проекты.
              </p>
            </div>
          </div>

          <ol className="relative space-y-6 border-l border-emerald-100 pl-4 md:pl-6">
            <li className="relative">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md shadow-emerald-500/40" />
              <div className="ml-2 rounded-2xl bg-white/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-950">
                  1. Первое знакомство
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Участник слышит об ЭКОКОННТЕКТ 4.0, знакомится с базовыми
                  принципами экологичного образа жизни и выбирает одну простую
                  привычку для старта.
                </p>
              </div>
            </li>
            <li className="relative">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md shadow-emerald-500/40" />
              <div className="ml-2 rounded-2xl bg-white/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-950">
                  2. Практика и поддержка
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Через мероприятия, мастер-классы и совместные акции человек
                  получает поддержку и пространство для вопросов, экспериментируя
                  с новыми экологичными практиками.
                </p>
              </div>
            </li>
            <li className="relative">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md shadow-emerald-500/40" />
              <div className="ml-2 rounded-2xl bg-white/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-950">
                  3. Личная инициатива
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Участник чувствует уверенность, запускает свои инициативы:
                  помогает на акциях, делится опытом с друзьями и становится
                  проводником экологичных изменений.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Благодарности */}
        <section id="gratitude" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Благодарности
              </h2>
              <p className="mt-1 max-w-xl text-base text-slate-600 sm:text-lg">
                Отзывы и слова благодарности от участников и партнёров. Первый
                слайд — возможность оставить свою благодарность.
              </p>
            </div>
          </div>
          <GratitudeSection />
        </section>

        {/* Карты */}
        <section id="locations" className="space-y-10">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Где мы реализуем проекты
              </h2>
            </div>
            <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-emerald-200 bg-white/70 text-xs text-slate-500">
              Неудалось загрузить карту
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Сортировка мусора
              </h2>
            </div>
            <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-emerald-200 bg-white/70 text-xs text-slate-500">
              Неудалось загрузить карту
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950">
                Наша поддержка
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Поддержка", handle: "@ecokonnekt" },
            ].map((contact) => (
              <article
                key={contact.handle}
                className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/90 text-sm font-semibold uppercase text-white shadow-sm">
                  {contact.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-emerald-950">
                    {contact.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {contact.handle}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-slate-500">
          <span>ЭКОКОННТЕКТ 4.0 · волонтёрский проект</span>
          <span>Сделано с заботой об экологии</span>
        </div>
      </footer>
    </div>
  );
}
