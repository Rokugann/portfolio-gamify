import firebaseChatAppCardDisplay from "./cardDisplay.svg"
import firebaseChatAppDisplay from "./display.svg"

function firebaseChatAppProjectView()
{
    return(
        <div><img src="/public/flyp.png" /></div>
    )
}

function firebaseChatAppProjectCode()
{
    return (
        <pre className="bg-transparent">
            {
`<!--Nav desktop-->
<header class="fixed flex flex-col my-24 p-2 pb-12 gap-6 space-y-8 ml-8 z-40 text-center text-slate-300 text-xl bg-slate-900/90 border-[2px] border-zinc-900 rounded-full shadow-topLargeGray max-xl:hidden"> 
<a href={~p"/catalog"} class="flex">
<div class="w-24 aspect-square rounded-full bg-white">
  <img src={~p"/images/flyp.svg"} class="z-30" />
</div>
</a>
<nav class="flex flex-col items-center gap-4 grow">
  <a href={~p"/catalog"}>
    <button class="flex flex-col items-center text-sm hover:text-flyp-wine-400 font-semibold tracking-wider">
      <.icon name="hero-book-open" class="w-8 h-8"/>Catalog
    </button>
  </a>
</nav>
<footer class="leading-16 text-sm mx-auto items-center flex flex-col text-slate-400" >
  <a class="hover:underline decoration-2 tracking-wider" href="contact_page">Mentions</a>
  <a class="hover:underline decoration-2 tracking-wider" href="contact_page">Help</a>
</footer>
  <!-- Ici les autres composants de la navigation-->
</header>
<!--End nav desktop-->
<!-- Content section -->
<section class="xl:ml-36">
 <!--top bar-->
<div class="fixed rounded-full shadow-topLargeGray w-80 z-30 top-2 right-2 bg-gray-900/90 p-2 text-slate-300 hidden xl:flex backdrop-blur-xl">
  <form class="ml-2 flex flex-1">
    <button><.icon name="hero-magnifying-glass" class="w-6 h-6"/></button>
    <input class="grow bg-transparent border-none" type="text" placeholder="Search"/>
  </form>
  <button id="user-menu" phx-click={toggle_dropdown("#user-dropdown")} class="flex w-8 h-8 self-center"><.icon name="hero-user-circle" class="h-full w-full"/></button>
  <div></div>
</div>
<!--End top bar-->
<main class="pt-8 pb-36 xl:py-20 sm:px-6 lg:px-8">
  <%= @inner_content %>
</main>
</section>
<!-- End Content section -->
<!--Nav mobile-->
<div class="pb-3 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-flyp-wine-500 via-flyp-wine-600 to-flyp-wine-800 py-4 shadow-topLargeGray border-t-4 border-t-yellow-400 fixed z-40 right-0 left-0 bottom-0 xl:hidden text-center text-xl grid grid-rows-1 grid-cols-3 justify-items-center items-center text-flyp-wine-900">
<div class="h-10 flex items-center">
  <button><.icon name="hero-magnifying-glass" class="w-6 h-6"/></button>  
  <a href={~p"/catalog"}>
    <button class="hover:text-yellow-400">
      <.icon name="hero-book-open" class="w-8 h-8"/>
    </button>
  </a>
</div>
<a href={~p"/catalog"} class="max-md:grow p-1 rounded-full shadow-md shadow-flyp-wine-700 border border-flyp-wine-600 bg-gradient-to-b from-flyp-wine-700 to-flyp-wine-600">
  <div class="w-14 h-14 p-1 rounded-full bg-gray-100 shadow-inner shadow-zinc-900">
    <img src={~p"/images/flyp.svg"} class="z-30" />
  </div>
</a>
<div class="h-10 flex items-center">
  <button phx-click={toggle_dropdown("#user-dropdown")}><.icon name="hero-user-circle" class="w-8 h-8"/></button>
  <button><.icon name="hero-ellipsis-vertical" class="w-8 h-8"/></button>
</div>
</div>
<!--End Nav mobile-->

<!-- User menu dropdown -->
<.backdrop close_position={:top_right} phx-click={toggle_dropdown("#user-dropdown")}/>
<.responsive_dropdown
:if={@current_user} 
id="user-dropdown"
class="xl:top-14 xl:right-6 xl:rounded-t-none"
>
<:header>
  <p class="font-semibold"><%= @current_user.email %></p>
  <div :if={@current_user.tier == :free} class="text-xs font-bold space-x-4 p-2">
    <span class="text-gray-500 uppercase">
      <%= @current_user.tier %> tier
    </span>
    <.link class="underline transform duration-150 hover:text-flyp-wine-500 hover:-rotate-6">
      Subscribe
    </.link>
  </div>
  <span :if={@current_user.tier != :free} class="text-gray-500 text-xs font-bold uppercase">
    <%= @current_user.tier %> tier
  </span>
</:header>
<div class="py-4">
  <.stackable_button 
    title="Settings" 
    icon="hero-cog-8-tooth-solid" 
    navigate={~p"/user-settings"}
    align={:left}
  />
</div>
<:footer>
  <button class="p-1 max-xl:px-8 rounded-full hover:text-flyp-wine-700">
    <.link
      href={~p"/logout"}
      method="delete">
      <.icon name="hero-power-solid" class="w-6 h-6"/>
    </.link>
  </button>
</:footer>
</.responsive_dropdown>
<!-- End user menu dropdown -->`
            }
        </pre>
    )
}

export {firebaseChatAppProjectView, firebaseChatAppProjectCode, firebaseChatAppCardDisplay,  firebaseChatAppDisplay}