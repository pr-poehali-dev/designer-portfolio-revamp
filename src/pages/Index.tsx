import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 bg-hero-gradient animate-gradient opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full animate-float blur-3xl"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full animate-float blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full animate-float blur-3xl"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Веб-дизайнер лендингов
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
            Помогаю бизнесу
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              зарабатывать больше
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаю лендинги, которые конвертируют посетителей в клиентов.
            <br />3 года опыта, 50+ проектов, рост конверсии до 300%
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть кейсы
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <Icon
              name="ChevronDown"
              size={32}
              className="text-slate-400 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Icon name="User" size={16} className="mr-2" />
                Обо мне
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-slate-800">
                Лендинги — это не просто красивые страницы
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Это инструмент, который заставляет пользователя купить,
                подписаться или заказать. Я создаю интерфейсы, которые работают
                на результат вашего бизнеса.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-slate-700">
                    3 года опыта в веб-дизайне
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-slate-700">50+ успешных проектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-slate-700">
                    Средний рост конверсии 150%
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card-gradient p-8 rounded-2xl border border-slate-200">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Мой результат
                </h3>
                <p className="text-slate-600 mb-6">
                  После редизайна лендинга клиента, продажи выросли на 180% за
                  первый месяц. Главное — понимать психологию пользователя.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">180%</div>
                    <div className="text-sm text-slate-500">Рост продаж</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.2%</div>
                    <div className="text-sm text-slate-500">Конверсия</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      30дней
                    </div>
                    <div className="text-sm text-slate-500">Срок проекта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Icon name="FolderOpen" size={16} className="mr-2" />
              Кейсы
            </Badge>

            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Проекты, которые работают на результат
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Каждый проект — это история о том, как правильный дизайн помог
              бизнесу заработать больше
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Лендинг IT-курсов",
                problem: "Конверсия 0.8%, мало заявок",
                solution: "Добавил социальные доказательства и упростил форму",
                result: "Конверсия выросла до 4.2%",
                growth: "+425%",
                color: "bg-blue-500",
                image: "/img/a8c24096-356c-4c2b-83c0-a517dd079885.jpg",
              },
              {
                title: "Интернет-магазин мебели",
                problem: "Высокий показатель отказов 75%",
                solution: "Переделал каталог и добавил 3D-превью",
                result: "Отказы снизились до 35%",
                growth: "+180%",
                color: "bg-green-500",
                image: "/img/3248444c-54af-46a2-ba40-50e14414da21.jpg",
              },
              {
                title: "Сервис доставки еды",
                problem: "Сложный процесс заказа",
                solution: "Упростил UX, добавил быстрый заказ",
                result: "Количество заказов +220%",
                growth: "+220%",
                color: "bg-orange-500",
                image: "/img/d3629e90-a61e-448a-b77f-85e3d1685a61.jpg",
              },
            ].map((caseItem, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-slate-200 overflow-hidden"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div
                      className={`w-8 h-8 ${caseItem.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon name="Zap" size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  {caseItem.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <Badge
                      variant="outline"
                      className="mb-2 text-red-600 border-red-200"
                    >
                      Проблема
                    </Badge>
                    <p className="text-sm text-slate-600">{caseItem.problem}</p>
                  </div>

                  <div>
                    <Badge
                      variant="outline"
                      className="mb-2 text-blue-600 border-blue-200"
                    >
                      Решение
                    </Badge>
                    <p className="text-sm text-slate-600">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div>
                    <Badge
                      variant="outline"
                      className="mb-2 text-green-600 border-green-200"
                    >
                      Результат
                    </Badge>
                    <p className="text-sm text-slate-600">{caseItem.result}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-primary">
                    {caseItem.growth}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-slate-600"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Icon name="Settings" size={16} className="mr-2" />
              Процесс работы
            </Badge>

            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Как мы будем работать
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Прозрачный процесс без сюрпризов. Вы всегда знаете, что происходит
              с вашим проектом
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Брифование",
                description:
                  "Изучаем ваш бизнес, конкурентов и целевую аудиторию",
                icon: "FileText",
                color: "bg-blue-500",
              },
              {
                step: "02",
                title: "Прототип",
                description:
                  "Создаем структуру страницы и пользовательские сценарии",
                icon: "Layout",
                color: "bg-green-500",
              },
              {
                step: "03",
                title: "Дизайн",
                description:
                  "Разрабатываем визуальную концепцию и финальный макет",
                icon: "Palette",
                color: "bg-purple-500",
              },
              {
                step: "04",
                title: "Поддержка",
                description: "Помогаем с внедрением и оптимизацией результатов",
                icon: "Headphones",
                color: "bg-orange-500",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>

                <div className="text-3xl font-bold text-slate-300 mb-2">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Готовы увеличить продажи через дизайн?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Давайте обсудим ваш проект. Первая консультация бесплатно —
            расскажу, как можно улучшить ваш текущий сайт
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Бесплатный аудит сайта
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
