import { Injectable } from "@angular/core";

export interface News {
  title: string,
  date: Date,
  publisher: string,
  text: string,
  pictureId: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  news: News[] = [
    {
      title: 'Роналду в ближайшее время может покинуть «Манчестер Юнайтед»',
      date: new Date(),
      publisher: 'Спорт-Экспресс',
      text: 'Главный тренер «Аякса» Эрик тен Хаг, который якобы договорился о контракте с «Манчестер Юнайтед», не намерен работать с нападающим команды Криштиану Роналду, информирует Marca со ссылкой на The Daily Star.',
      pictureId: 'news1',
      id: '21'
    },
    {
      title: 'Футболисты «Спартака» выйдут на игру с «Рубином» в форме со шрифтом Брайля',
      date: new Date(),
      publisher: 'РИАМО',
      text: 'Столичный ФК «Спартак» в субботу выйдет на матч с казанским «Рубином» в форме, где фамилии футболистов будут нанесены шрифтом для незрячих людей, сообщает Газета.ru.',
      pictureId: 'news2',
      id: '22'
    }
  ];

  getNews() {
    return this.news
  }

  getNewsById(id: string) {
    return this.news.find(news => news.id == id)
  }
}