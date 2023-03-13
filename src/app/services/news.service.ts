import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FbCreateResponse, News } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private news: News[] = [
    {
      title: 'Роналду в ближайшее время может покинуть «Манчестер Юнайтед»',
      date: new Date(),
      publisher: 'Спорт-Экспресс',
      text: `Португальский форвард «Манчестер Юнайтед» Криштиану Роналду может покинуть клуб по окончании сезона. Об этом сообщает Diario AS.

      Отмечается, что португалец точно уйдет из команды в случае, если «Манчестер» не попадет по итогам АПЛ в зону Лиги чемпионов. 
      Он хочет сравняться с легендарным испанским игроком «Реала» Пако Хенто по числу выигранных трофеев Лиги чемпионов (6). На данный момент в активе португальца их 5.      
      
      В текущем сезоне манкунианцы пробились в плей-офф ЛЧ, заняв в группе с «Вильярреалом», «Аталантой» и «Янг Бойз» первое место, но в АПЛ находятся на 7-й позиции (32 очка).
      У идущего 4-м «Вест Хэма» 37 очков.`,
      pictureId: 'news1',
      id: '21',
    },
    {
      title:
        'Футболисты «Спартака» выйдут на игру с «Рубином» в форме со шрифтом Брайля',
      date: new Date(),
      publisher: 'РИАМО',
      text: 'Столичный ФК «Спартак» в субботу выйдет на матч с казанским «Рубином» в форме, где фамилии футболистов будут нанесены шрифтом для незрячих людей, сообщает Газета.ru.',
      pictureId: 'news2',
      id: '22',
    },
  ];

  constructor(private readonly http: HttpClient) {}

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.fbDbUrl}/news.json`).pipe(
      map((res: {[key: string]: any}) => {
        return Object.keys(res).map(key => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date)
        }))
      })
    )
  }

  public getNewsById(id: string): News | undefined {
    return this.news.find((news) => news.id == id);
  }

  public create(news: News): Observable<News> {
    return this.http.post<FbCreateResponse>(`${environment.fbDbUrl}/news.json`, news)
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...news,
            id: response.name
          }
        })
      );
  } 
}
