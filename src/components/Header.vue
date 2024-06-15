<template>
    <header>
        <nav
            class="relative flex w-full items-center justify-between bg-[#f87171] py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <div
                    class="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left">
                    <ul class="mb-0 flex flex-col lg:flex-row">
                        <li class="mb-4 lg:mb-0 lg:pe-2">
                            <router-link :to="{ name: 'index' }" class="link">Rooms</router-link>
                        </li>
                        <li class="mb-4 lg:mb-0 lg:pe-2">
                            <router-link :to="{ name: 'guests' }" class="link">Guests</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>