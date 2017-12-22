#include <windows.h>
#include <stdio.h>

int main(){
	if(IsProcessorFeaturePresent(PF_VIRT_FIRMWARE_ENABLED)){
		printf("%d", 1);
	}else{
		printf("%d", 0);
	}
	return 0;
}
