FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["alinstefanolaruWeb/alinstefanolaruWeb.csproj", "alinstefanolaruWeb/"]
RUN dotnet restore "alinstefanolaruWeb/alinstefanolaruWeb.csproj"
COPY . .
WORKDIR "/src/alinstefanolaruWeb"
RUN dotnet build "alinstefanolaruWeb.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "alinstefanolaruWeb.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "alinstefanolaruWeb.dll"]