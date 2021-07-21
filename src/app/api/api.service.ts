import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Item, ItemId, User } from "../data-model/interfaces";

const API_URL = environment.API_URL;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTopStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("topstories", start, count);
  }

  public getNewStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("newstories", start, count);
  }

  public getBestStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("beststories", start, count);
  }

  public getAskStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("askstories", start, count);
  }

  public getShowStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("showstories", start, count);
  }

  public getJobStories(start: number = 0, count?: number): Promise<ItemId[]> {
    return this.getGenericItems("jobstories", start, count);
  }

  public getItem(id: ItemId): Promise<Item> {
    return this.http.get(this.createItemUrl(id)).toPromise() as Promise<Item>;
  }

  public getUser(username: string): Promise<User> {
    return this.http
      .get(this.createUserURL(username))
      .toPromise() as Promise<User>;
  }

  private getGenericItems(
    type: string,
    start: number = 0,
    count?: number
  ): Promise<ItemId[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.createGenericURL(type))
        .toPromise()
        .then((itemsIds) => {
          if (Array.isArray(itemsIds)) {
            if (count) {
              resolve(itemsIds.slice(start, start + count));
            } else {
              resolve(itemsIds);
            }
          } else {
            reject("invalid item ids");
          }
        })
        .catch((e) => reject(e));
    });
  }

  /**
   *
   * @param id : string
   * @returns Item URL
   */
  private createItemUrl(id: ItemId): string {
    return `${API_URL}/item/${id}.json`;
  }

  /**
   *
   * @param id : string
   * @returns URL of the user information.
   */
  private createUserURL(id: string): string {
    return `${API_URL}/user/${id}.json`;
  }

  /**
   *
   * @param type string. Example: topstories,newstories, beststories, askstories, showstories, jobstories
   * @returns URL to the type of generic item.
   */
  private createGenericURL(type: string): string {
    return `${API_URL}/${type}.json`;
  }
}
