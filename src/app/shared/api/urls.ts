export const mockUrl = 'https://reqres.in';

export class Urls {
  /** Interceptor logs */

  /** Получить все логи interceptor'а */
  public static getInterceptorLogs(): string {
    return `${mockUrl}/UNDEFINED`;
  }

  /** Mock http */

  /** Список mock-пользователей */
  public static getMockUsersList(): string {
    return `${mockUrl}/api/users?page=2`;
  }

  /** Конкртеный mock-пользователь */
  public static getMockUser(id: number): string {
    return `${mockUrl}/api/users/${id}`;
  }

  /** Получить ошибку 404 */
  public static getErrorResponse(): string {
    return `${mockUrl}/api/users/23`;
  }

  /** Получить ошибку авторизации */
  public static postLoginErrorResponse(): string {
    return `${mockUrl}/api/login`;
  }
}
