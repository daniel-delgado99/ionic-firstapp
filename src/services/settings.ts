export class SettingsService {
    private darkTheme = false;

    setTheme(isDark: boolean) {
        this.darkTheme = isDark;
    }

    isDarkTheme() {
        return this.darkTheme;
    }
}