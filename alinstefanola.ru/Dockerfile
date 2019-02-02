FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["alinstefanola.ru/alinstefanola.ru.csproj", "alinstefanola.ru/"]
RUN dotnet restore "alinstefanola.ru/alinstefanola.ru.csproj"
COPY . .
WORKDIR "/src/alinstefanola.ru"
RUN dotnet build "alinstefanola.ru.csproj" -c Release -o /app \
	&& apt-get install npm
	&& npm install

FROM build AS publish
RUN dotnet publish "alinstefanola.ru.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "alinstefanola.ru.dll"]