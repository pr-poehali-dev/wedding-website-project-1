import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-wedding-beige to-wedding-cream">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/10430294-3c9f-498b-af22-808abca5bc49.jpg')`
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-wedding-text mb-4">
            Максим & Евгения
          </h1>
          <p className="font-cormorant text-2xl md:text-3xl italic text-wedding-text mb-8">
            дорогие родные и близкие!
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8 inline-block">
            <p className="font-open-sans text-lg text-wedding-text leading-relaxed mb-6 max-w-md">
              В нашей жизни предстоят счастливые перемены!
              <br /><br />
              Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди. 
              Будем рады разделить с вами чудесный праздник в день нашей свадьбы, которая состоится:
            </p>
            <div className="font-cormorant text-4xl font-semibold text-wedding-text">
              14.04.2025
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl font-light text-wedding-text text-center mb-16">
            ПРОГРАММА ДНЯ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={28} className="text-wedding-brown mt-1" />
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-wedding-text mb-2">
                      16:30 - сбор гостей
                    </h3>
                    <p className="text-wedding-text/80">
                      Просим взять с собой хорошее настроение и свои улыбки
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Heart" size={28} className="text-wedding-brown mt-1" />
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-wedding-text mb-2">
                      17:00 - церемония
                    </h3>
                    <p className="text-wedding-text/80">
                      Вы станете свидетелями трогательного момента
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="PartyPopper" size={28} className="text-wedding-brown mt-1" />
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-wedding-text mb-2">
                      18:00 - банкет
                    </h3>
                    <p className="text-wedding-text/80">
                      Время вкусной еды, танцев и развлечений
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-4 bg-wedding-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl font-light text-wedding-text text-center mb-16">
            МЕСТО ПРОВЕДЕНИЯ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-cormorant text-3xl font-semibold text-wedding-text mb-4">
                "SANTA MONICA"
              </h3>
              <p className="text-lg text-wedding-text mb-4">
                г. Томск, Кировский район,
                <br />
                улица Кулева 26
              </p>
              <Button 
                className="bg-wedding-brown hover:bg-wedding-brown/90 text-white px-6 py-3 rounded-full"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Открыть карту
              </Button>
            </div>
            <div 
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/img/8969829a-0d73-40e4-ac40-59184df707bd.jpg')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl font-light text-wedding-text text-center mb-16">
            ДРЕСС-КОД
          </h2>
          <Card className="border-none shadow-lg bg-wedding-cream/50">
            <CardContent className="p-12 text-center">
              <p className="text-lg text-wedding-text mb-8 leading-relaxed">
                Мы ждем и с удовольствием готовимся к нашему незабываемому дню! 
                Поддержите нас вашими улыбками и объятиями, а так же красивыми 
                нарядами в палитре торжества
              </p>
              
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-wedding-brown"></div>
                <div className="w-12 h-12 rounded-full bg-wedding-olive"></div>
                <div className="w-12 h-12 rounded-full bg-wedding-cream"></div>
                <div className="w-12 h-12 rounded-full bg-wedding-beige"></div>
                <div className="w-12 h-12 rounded-full bg-wedding-white border-2 border-wedding-olive"></div>
              </div>
              
              <p className="text-wedding-text/80 mb-8">
                Просим вас подтвердить свое присутствие и заполнить форму ниже:
              </p>
              
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Ваше Имя и Фамилия" 
                  className="w-full p-3 border border-wedding-olive/30 rounded-lg focus:ring-2 focus:ring-wedding-brown focus:border-transparent"
                />
                
                <div className="text-left">
                  <p className="mb-4 font-medium text-wedding-text">
                    Планируете ли Вы присутствовать на свадьбе?
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="attendance" className="mr-3" />
                      <span>Да, с удовольствием!</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="attendance" className="mr-3" />
                      <span>К сожалению, не смогу...</span>
                    </label>
                  </div>
                </div>
                
                <Button className="bg-wedding-brown hover:bg-wedding-brown/90 text-white px-8 py-3 rounded-full">
                  Отправить ответ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl font-light text-wedding-text text-center mb-16">
            ФОТОГРАФИИ
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div 
              className="aspect-square bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/img/10430294-3c9f-498b-af22-808abca5bc49.jpg')`
              }}
            ></div>
            <div 
              className="aspect-square bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/img/2f560cea-5b9e-403c-a191-db6707be751b.jpg')`
              }}
            ></div>
            <div 
              className="aspect-square bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/img/8969829a-0d73-40e4-ac40-59184df707bd.jpg')`
              }}
            ></div>
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-wedding-brown text-wedding-brown hover:bg-wedding-brown hover:text-white px-8 py-3 rounded-full"
            >
              <Icon name="Camera" size={20} className="mr-2" />
              Смотреть все фотографии
            </Button>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 px-4 bg-wedding-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl font-light text-wedding-text text-center mb-16">
            РЕКОМЕНДУЕМЫЕ ОТЕЛИ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/img/8969829a-0d73-40e4-ac40-59184df707bd.jpg')`
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-text mb-2">
                  Hotel Boutique
                </h3>
                <p className="text-wedding-text/80 mb-4">
                  Элегантный отель в центре города с прекрасным видом на горы
                </p>
                <div className="flex items-center gap-2 text-wedding-brown mb-4">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">15 минут от места проведения</span>
                </div>
                <Button variant="outline" className="w-full border-wedding-brown text-wedding-brown hover:bg-wedding-brown hover:text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/img/2f560cea-5b9e-403c-a191-db6707be751b.jpg')`
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-text mb-2">
                  Garden Resort
                </h3>
                <p className="text-wedding-text/80 mb-4">
                  Уютный курорт с садами и спа-центром для полного релакса
                </p>
                <div className="flex items-center gap-2 text-wedding-brown mb-4">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">10 минут от места проведения</span>
                </div>
                <Button variant="outline" className="w-full border-wedding-brown text-wedding-brown hover:bg-wedding-brown hover:text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 bg-wedding-text text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="font-cormorant text-6xl font-light mb-4">
              14.04
              <br />
              2025
            </div>
          </div>
          <h3 className="font-cormorant text-3xl font-light mb-4">
            МЫ БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС!
          </h3>
          <p className="font-open-sans text-lg opacity-90">
            С любовью, Максим и Евгения
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;