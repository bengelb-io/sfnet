<template>
    <h1 class=" text-2xl">
        San Francisco Networks
    </h1>
    <div>
        <BarGraph :max="100" :values="[100, 43, 25, 42]" />
        <!-- <MessageIntercept>
            <template #origin>
                  <UAvatar src="https://github.com/benjamincanac.png"  size="xl"/>
            </template>
            <template #destination>
                  <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </template>
        </MessageIntercept> -->
    </div>
</template>