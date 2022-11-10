# Arquitetura e estrutura da aplicação

###  Arquitetura geral

As aplicações do **Angular** seguem a arquitetura **Single Page Application** (SPA), o que significa que elas são constituídas de um único documento HTML contendo o JavaScript de toda a aplicação. Comunicações com o Back End ocorrem apenas para buscar dados. Portanto, o Angular CLI compila todos os arquivos do projeto em um único HTML e um conjunto de scripts e estilos.

**Arquitetura Tradicional**

- Cada página é um documento HTML (com su CSS e JS);
- Mudança de página via hyperlink (requer requisição ao servidor).

**Arquitetura Single Page Application (SPA)**

- Único documento HTML (com todo o CSS e JS da aplicação);
- Mudança de página via JavaScript (não precisa buscar no servidor);
- Acesso ao servidor apenas para buscar dados (tipicamente JSON).

---

### Estrutura da aplicação (módulos e componentes)

#### Módulos

Uma aplicação Angular é organizada em módulos, que são definidos pelo decorator `@NgModule`. Toda aplicação deve ter ao menos um módulo principal, que normalmente fica em `app/app.module.ts`. Um módulo deve informar as declarações que o compõem, e também pode importar outros módulos, como no exemplo abaixo:

```typescript
@NgModule({
 declarations: [AppComponent, PanelComponent],
 imports: [BrowserModule],
 bootstrap: [AppComponent]
})
export class AppModule { }
```

Note que toda aplicação que executa no navegador deve importar BrowserModule.

#### Componentes

Componentes são o mais importante conceito do Angular. A aplicação é construída por meio da declaração e uso de componentes partindo de um componente principal, que pode usar outros componentes, formando uma hierarquia. Os componentes devem ser incluídos em um módulo para serem utilizados. Toda aplicação deve ter ao menos o componente principal (que normalmente fica em app/app.component.ts).
